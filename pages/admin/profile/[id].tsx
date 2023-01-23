import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prismadb';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { format } from 'date-fns';

const AdminProfilePage = ({ profile }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Link className="inline-flex items-center p-4 sm:p-8" href="/admin">
          <ArrowLeftCircleIcon className="w-8 h-8 mr-2" aria-hidden="true" />
          Back to Admin
        </Link>

        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Homies Information
                </h3>
                <p className="max-w-2xl mt-1 text-sm text-gray-500">
                  {format(new Date(profile.createdAt), 'MMMM d, yyyy')}
                </p>
              </div>
              <div className="px-4 py-5 border-t border-gray-200 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {profile.user.name} ({profile.name})
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Desired Location
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {profile.location}
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <a
                        className="text-blue-600 underline"
                        href={`mailto:${profile.user.email}`}
                      >
                        {profile.user.email}
                      </a>
                    </dd>
                  </div>

                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {profile.bio}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfilePage;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session?.user.admin) {
    return {
      notFound: true,
    };
  }

  let profile = await prisma.profile.findUnique({
    select: {
      id: true,
      name: true,
      location: true,
      createdAt: true,
      bio: true,
      user: {
        select: {
          name: true,
          email: true,
        },
      },
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
    props: { profile: JSON.parse(JSON.stringify(profile)) },
  };
}
