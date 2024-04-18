import { authOptions } from '@/lib/auth';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { MainNav } from './dashboard/components/main-nav';
import { UserNav } from './dashboard/components/user-nav';

export const metadata: Metadata = {
  title: 'Homies',
  description: 'Welcome to Homies',
};

export default async function AuthLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex items-center h-16 px-4">
            <MainNav session={session} className="mx-6" />
            <div className="flex items-center ml-auto space-x-4">
              <UserNav session={session} />
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
