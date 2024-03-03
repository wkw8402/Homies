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
    let profileRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profile/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    profile = await profileRes.json();
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
