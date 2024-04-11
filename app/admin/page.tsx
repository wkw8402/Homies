import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Head from 'next/head';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '../../lib/prismadb';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import AdminDashboard from './components/admin-dashboard';

export const dynamic = 'force-dynamic';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    notFound();
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      admin: true,
    },
  });

  if (!user?.admin) {
    notFound();
  }

  const profiles = await prisma.profile.findMany({
    select: {
      id: true,
      name: true,
      location: true,
      bio: true,
      image: true,
      user: {
        select: {
          name: true,
          email: true,
          admin: true,
          image: true,
        },
      },
    },
  });

  return (
    <>
      <Head>
        <title>Admin | Homies</title>
      </Head>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <Link className="inline-flex items-center p-3 sm:py-8" href="/dashboard">
              <ArrowLeftCircleIcon className="w-8 h-8 mr-2" aria-hidden="true" />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
      <AdminDashboard profiles={profiles} />
    </>
  );
};

export default AdminPage;
