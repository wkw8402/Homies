import { getSession } from 'next-auth/react';
import React from 'react';

const ProfilePage = ({ profile }) => {
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen mx-auto dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100">
          {/* <img
            src="https://source.unsplash.com/200x200/?portrait?2"
            alt=""
            className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-64 dark:bg-gray-500 aspect-square"
          /> */}
          <div>
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <span className="block pb-2 text-sm dark:text-gray-400">
              {profile.location}
            </span>
            <p>{profile.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  let profile = null;

  if (session) {
    profile = await prisma.profile.findUnique({
      select: {
        name: true,
        location: true,
        bio: true,
      },
      where: {
        id: context.params.id,
      },
    });

    if (!profile) {
      return {
        notFound: true,
      };
    }
  }

  return {
    props: { profile },
  };
}
