import NextAuth, { DefaultSession } from 'next-auth';
declare module 'next-auth' {
  interface Session {
    profile: {
      id: string;
    };
    user?: {
      id: string;
      admin: admin;
    } & DefaultSession['user'];
  }
}
