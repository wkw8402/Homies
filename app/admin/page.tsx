import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import { prisma } from '../../lib/prismadb';
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
      <AdminDashboard profiles={profiles} />
    </>
  );
};

export default AdminPage;
