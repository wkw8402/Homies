import { getSession, signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ProfileForm from '../../components/ProfileForm';
import prisma from '../../lib/prismadb';

const MyProfilePage = ({ profile }) => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <>
        <section className="py-16 overflow-hidden bg-white xl:pb-56">
          <div className="container px-4 mx-auto">
            <div className="max-w-md mx-auto text-center">
              <Link className="inline-block mb-24" href="/">
                <img width={200} src="/images/logo.png" alt="" />
              </Link>
              <ul className="flex mb-4 space-x-4">
                <li>
                  <Link
                    href="/profile"
                    className="font-medium text-indigo-600 underline"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile/contact-info"
                    className="font-medium text-indigo-600 underline"
                  >
                    Contact Info
                  </Link>
                </li>
              </ul>

              <div className="w-full mb-8 border-t"></div>

              <h2 className="mb-4 text-5xl font-bold leading-tight text-center font-heading tracking-px-n">
                Your Homies Profile
              </h2>
              <p className="mb-12 text-lg font-medium leading-normal text-gray-600">
                Please note the data shared will be visible on your public
                profile. You can always make updates.
              </p>
              <p className="mb-4 text-left text-gray-600">
                Logged in as: <b>{session.user.email}</b>{' '}
                <button
                  className="font-medium text-indigo-600 underline"
                  onClick={() => signOut()}
                >
                  (sign out)
                </button>
              </p>
              <ProfileForm profile={profile} />
              <div className="flex flex-col space-y-4">
                <Link target={'_blank'} href={`/profile/${profile.id}`}>
                  View Public Profile
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    router.push('/auth/signin');
    return (
      <div>
        You are not logged in! <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
};

export default MyProfilePage;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  let profile = null;

  if (session) {
    profile = await prisma.profile.findUnique({
      select: {
        id: true,
        name: true,
        location: true,
        bio: true,
      },
      where: {
        userId: session.user.id,
      },
    });
  }

  return {
    props: { profile },
  };
}
