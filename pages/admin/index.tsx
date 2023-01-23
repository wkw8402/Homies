import { getSession } from 'next-auth/react';
import prisma from '../../lib/prismadb';

const AdminPage = ({ profiles }) => {
  return (
    <>
      {profiles.map((profile) => (
        <>{profile.name}</>
      ))}
    </>
  );
};

export default AdminPage;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session?.user.admin) {
    return {
      notFound: true,
    };
  }

  let profiles = await prisma.profile.findMany({
    select: {
      id: true,
      name: true,
      location: true,
      bio: true,
      image: true,
      user: {
        select: {
          email: true,
        },
      },
    },
  });

  if (!profiles) {
    return {
      notFound: true,
    };
  }

  return {
    props: { profiles },
  };
}
