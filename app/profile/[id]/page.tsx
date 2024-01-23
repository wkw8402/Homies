import { notFound } from 'next/navigation';
import { prisma } from '../../../lib/prismadb';
import Profile from './Profile';

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  let profile;
  try {
    profile = await prisma.profile.findUnique({
      select: {
        name: true,
        location: true,
        bio: true,
      },
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error('Error retrieving profile:', error);
    notFound();
  }

  if (!profile) {
    notFound();
  }

  const title = `${profile.name}'s Profile on Homies`;

  return (
    <>
      <Profile profile={profile} />
    </>
  );
}
