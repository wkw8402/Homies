import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prismadb';

const AdminProfilePage = ({ profile }) => {
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen mx-auto bg-gray-50">
        <div className="flex flex-col max-w-md p-6">
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Applicant Information
              </h3>
              <p className="max-w-2xl mt-1 text-sm text-gray-500">
                Personal details and application.
              </p>
            </div>
            <div className="px-4 py-5 border-t border-gray-200 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {profile.name}
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Application for
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    Backend Developer
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    margotfoster@example.com
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Salary expectation
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    $120,000
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">About</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

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

export default AdminProfilePage;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session.user.admin) {
    return {
      notFound: true,
    };
  }

  let profile = await prisma.profile.findUnique({
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

  return {
    props: { profile },
  };
}
