import classNames from 'classnames';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import prisma from '../../lib/prismadb';

const AdminPage = ({ profiles }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Admin | Homies</title>
      </Head>
      <div className="min-h-screen py-8 bg-gray-100">
        <div className="px-4 mx-auto sm:px-6 max-w-7xl lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">
                Homies Profiles
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the users in your account including their name,
                location and email.
              </p>
            </div>
            {/* <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Add user
              </button>
            </div> */}
          </div>
          <div className="flex flex-col mt-8">
            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle">
                <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                  <table
                    className="min-w-full border-separate"
                    style={{ borderSpacing: 0 }}
                  >
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                        >
                          Location
                        </th>
                        <th
                          scope="col"
                          className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                        >
                          Email
                        </th>

                        {/* <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                        >
                          <span className="sr-only">Edit</span>
                        </th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {profiles.map((profile, profileIdx) => (
                        <tr
                          className="cursor-pointer hover:bg-gray-100"
                          onClick={(e) => {
                            console.log(e);

                            if (e.metaKey) {
                              window.open(
                                `/admin/profile/${profile.id}`,
                                '_blank'
                              );
                            } else if (e.target) {
                              router.push(`/admin/profile/${profile.id}`);
                            }
                          }}
                          key={profile.id}
                        >
                          <td
                            className={classNames(
                              profileIdx !== profiles.length - 1
                                ? 'border-b border-gray-200'
                                : '',
                              'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                            )}
                          >
                            {profile.name}{' '}
                            {profile.user.admin && (
                              <>
                                <span className="ml-2 text-xs font-bold text-blue-600 uppercase">
                                  Admin
                                </span>
                              </>
                            )}
                          </td>
                          <td
                            className={classNames(
                              profileIdx !== profiles.length - 1
                                ? 'border-b border-gray-200'
                                : '',
                              'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell'
                            )}
                          >
                            {profile.location}
                          </td>
                          <td
                            className={classNames(
                              profileIdx !== profiles.length - 1
                                ? 'border-b border-gray-200'
                                : '',
                              'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'
                            )}
                          >
                            {profile.user.email}
                          </td>

                          {/* <td
                            className={classNames(
                              profileIdx !== profiles.length - 1
                                ? 'border-b border-gray-200'
                                : '',
                              'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8'
                            )}
                          >
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit
                              <span className="sr-only">, {profile.name}</span>
                            </a>
                          </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          name: true,
          email: true,
          admin: true,
          image: true,
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
