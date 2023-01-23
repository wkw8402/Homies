import Head from 'next/head';
import Link from 'next/link';
import Avatar from 'react-avatar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import prisma from '../../lib/prismadb';

const ProfilePage = ({ profile }) => {
  return (
    <>
      <Head>
        <title>{profile.name}'s Profile on Homies</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-purple-25 to-purple-50">
        <Header />

        <section className="px-4 py-6 sm:px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-6 border border-gray-300 rounded-xl">
              <div className="relative">
                <div className="block object-cover w-full h-72" />
                <div className="absolute bottom-0 left-0 flex flex-wrap items-end justify-between w-full p-6">
                  <div className="flex items-end w-full mb-5 md:w-auto md:mb-0">
                    <Avatar
                      src="/images/logo.png"
                      className="flex-shrink-0 w-16 h-16 mr-2 border rounded-full sm:w-16 sm:h-16 md:mr-6"
                    />
                    <div className="mb-2 ml-2">
                      <h5 className="text-2xl font-bold text-black">
                        {profile.name}
                      </h5>
                      <div className="text-gray-600">
                        Looking for a Supportive Roommate
                        <br /> in {profile.location}
                      </div>
                    </div>
                  </div>
                  <Link
                    className="inline-block w-full px-6 py-3 font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-full md:w-64 hover:bg-indigo-700"
                    href="/contact"
                  >
                    Contact {profile.name}
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3 mb-6 lg:w-1/3 lg:mb-0">
                <div className="p-3 mb-6 border border-gray-300 rounded-xl">
                  <ul>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        About Me
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Roommate Preferences
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="p-3 border border-gray-300 rounded-xl">
                  <ul>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Interest
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Recommendation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-3 lg:w-2/3">
                <div className="p-6 border border-gray-300 rounded-xl">
                  <div className="pb-6 mb-6 border-b border-gray-300">
                    <h3 className="mb-6 text-lg font-semibold text-black">
                      About Me
                    </h3>
                    <p className="mb-4 text-gray-700">{profile.bio}</p>
                  </div>

                  <div>
                    <h3 className="mb-6 text-lg font-semibold text-black">
                      Roommate Preferences
                    </h3>
                    <div className="-mb-3">
                      <span className="inline-block px-4 py-2 mb-3 mr-3 leading-6 text-gray-900 bg-gray-300 rounded-full">
                        Wordpress Developer
                      </span>
                      <span className="inline-block px-4 py-2 mb-3 mr-3 leading-6 text-gray-900 bg-gray-300 rounded-full">
                        CSS Developer
                      </span>
                      <span className="inline-block px-4 py-2 mb-3 leading-6 text-gray-900 bg-gray-300 rounded-full">
                        IT Support Tracking
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full h-40 sm:h-48 xl:h-52 bg-gradient-to-b from-purple-50 to-yellow-100"></div>

      <Footer />
    </>
  );
};

export default ProfilePage;

export async function getServerSideProps(context) {
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
