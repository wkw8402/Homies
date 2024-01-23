import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { Theme, type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import Email from 'next-auth/providers/email';
import { createTransport } from 'nodemailer';
import { prisma } from './prismadb';

async function sendVerificationRequest(params) {
  const { identifier, url, provider, theme } = params;
  const { host } = new URL(url);

  if (process.env.NODE_ENV === 'development') {
    console.debug('Verification request', { identifier, url, provider, theme });
    return;
  }
  // NOTE: You are not required to use `nodemailer`, use whatever you want.
  const transport = createTransport(provider.server);
  const result = await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: `Sign in to ${host}`,
    text: text({ url, host }),
    html: html({ url, host, theme }),
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`);
  }
}

/**
 * Email HTML body
 * Insert invisible space into domains from being turned into a hyperlink by email
 * clients like Outlook and Apple mail, as this is confusing because it seems
 * like they are supposed to click on it to sign in.
 *
 * @note We don't add the email address to avoid needing to escape it, if you do, remember to sanitize it!
 */
function html(params: { url: string; host: string; theme: Theme }) {
  const { url, host, theme } = params;

  const escapedHost = host.replace(/\./g, '&#8203;.');

  const brandColor = theme.brandColor || '#346df1';
  const color = {
    background: '#f9f9f9',
    text: '#444',
    mainBackground: '#fff',
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: theme.buttonText || '#fff',
  };

  return `
<body style="background: ${color.background};">
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center"
        style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        Sign in to <strong>${escapedHost}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                target="_blank"
                style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
                in</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>
`;
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}

export const authOptions: NextAuthOptions = {
  providers: [
    Email({
      server: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      },
      from: 'Homies <hello@meethomies.com>', // The "from" address that you want to use
      sendVerificationRequest,
    }),
    CredentialsProvider({
      id: 'credentials',
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
      },
      authorize: async (credentials, req) => {
        console.log('creds', JSON.stringify(credentials));
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/check-credentials`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(credentials),
            }
          );
          const data = await response.json();

          if (response.status !== 200) {
            throw new Error(data.body);
          }

          const user = data.body;

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    session: async ({ session, token, user }: any) => {
      if (session?.user) {
        session.accessToken = token?.accessToken;
        session.user.id = token?.id;
        session.user.admin = user?.admin;
      }

      const userDb = await prisma.user.findUnique({
        where: {
          id: session.user.id,
        },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      });

      session.user = userDb;

      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    // signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};
