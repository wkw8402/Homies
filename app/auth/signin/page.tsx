import { getCsrfToken } from 'next-auth/react';
import SignInAuth from './sign-in-auth';

export default async function SignIn() {
  const csrfToken = await getCsrfToken();

  return <SignInAuth csrfToken={csrfToken} />;
}
