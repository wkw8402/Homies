import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loading from '../../../components/Loading';

const EditProfile = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const router = useRouter();

  const profile = session?.profile;
  const user = session?.user;

  useEffect(() => {
    if (!session && !loading) {
      router.push('/auth/signin');
    }
  }, [loading]);

  return (
    <>
      <Head>
        <title>Edit Profile | Homies</title>
      </Head>
      <div className="bg-gradient-to-b from-purple-25 to-purple-50">
        <section className="py-8 mx-auto max-w-7xl sm:px-6">
          {loading && <Loading />}
          {!loading && session && (
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="px-4 py-6 bg-white sm:p-6">
                  <div>
                    <h2
                      id="payment-details-heading"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Homies Profile
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Update your personal information
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-6 mt-6">
                    <div className="col-span-4 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="block w-full py-2 mt-1 font-medium sm:text-sm">
                        {user?.email}
                      </div>
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="cc-given-name"
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                      />
                    </div>

                    {/* <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="cc-family-name"
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                      />
                    </div> */}

                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                      />
                    </div>

                    {/* <div className="hidden sm:flex sm:col-span-2"></div> */}

                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Case Manager's Name
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Case Manager's Phone Number
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Regional Center (21 options)
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                      >
                        <option disabled selected>
                          Select your regional center...
                        </option>
                        <option>Westside Regional Center</option>
                        <option>Tri-Counties Regional Center</option>
                        <option>Valley Mountain Regional Center</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          )}
        </section>
      </div>
    </>
  );
};

export default EditProfile;
