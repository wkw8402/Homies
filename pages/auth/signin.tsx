import { getCsrfToken, signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function SignIn({ csrfToken }) {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session) {
    router.replace('/profile');
    return;
    //
  } else {
    return (
      <>
        <section className="min-h-screen py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Continue to Homies
              </h2>
              <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
                Homies allows you to create a public profile to share with your
                friends and family to find the perfect roommate.
              </p>
            </div>

            <div className="max-w-lg mx-auto mt-8 bg-white shadow-xl rounded-2xl sm:mt-12">
              <div className="p-6 sm:px-8">
                <form
                  method="post"
                  action="/api/auth/signin/email"
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="block w-full px-6 py-4 text-base text-center text-gray-900 placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
                    />
                    <input
                      name="csrfToken"
                      type="hidden"
                      defaultValue={csrfToken}
                    />
                  </div>

                  {/* <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        className="w-4 h-4 text-blue-600 border border-gray-200 rounded focus:outline-none focus:ring-blue-600"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="text-sm font-normal text-gray-700"
                      >
                        I agree with the
                        <a
                          href="#"
                          title=""
                          className="text-blue-600 hover:underline"
                        >
                          Terms & Conditions
                        </a>
                        of Clarity
                      </label>
                    </div>
                  </div> */}

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                  >
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
