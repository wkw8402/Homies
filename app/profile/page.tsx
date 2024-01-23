import { authOptions } from '@/lib/auth';
import { Profile } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { notFound, redirect } from 'next/navigation';
import { prisma } from '../../lib/prismadb';
import MyProfile from './Profile';

export const dynamic = 'force-dynamic';

const MyProfilePage = async () => {
  const session = await getServerSession(authOptions);

  let profile: Partial<Profile> | null = null;

  if (session) {
    profile = await prisma.profile.findUnique({
      select: {
        id: true,
        name: true,
        location: true,
        bio: true,
      },
      where: {
        userId: session?.user?.id,
      },
    });
  } else {
    // redirect to login
    return redirect('/');
  }

  if (!profile) {
    notFound();
  }

  return <MyProfile session={session} profile={profile} />;
};

export default MyProfilePage;
