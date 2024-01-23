import { authOptions } from '@/lib/auth';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Authentication from './Authentication';

export const metadata: Metadata = {
  title: 'Homies | Welcome',
  description: 'Homies authentication page.',
};

export default async function AuthenticationPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/dashboard');
  }

  return (
    <>
      <Authentication />
    </>
  );
}
