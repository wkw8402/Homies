import Head from 'next/head';
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

        <section className="py-8">
          <div className="container px-4 mx-auto">
            <div className="p-6 mb-8 border border-gray-300 rounded-xl">
              <div className="relative">
                <div className="block object-cover w-full h-72" />
                <div className="absolute bottom-0 left-0 flex flex-wrap items-center justify-between w-full p-6">
                  <div className="flex items-center w-full mb-5 md:w-auto md:mb-0">
                    <Avatar
                      src="/images/logo.png"
                      className="w-12 h-12 mr-2 border rounded-full sm:w-16 sm:h-16 md:mr-6"
                    />
                    <div>
                      <h5 className="text-xl font-bold text-indigo-50">
                        {profile.name}
                      </h5>
                      <span className="text-gray-900">{profile.location}</span>
                    </div>
                  </div>
                  <a
                    className="inline-block w-full px-6 py-3 text-sm font-bold leading-6 text-center text-white transition duration-200 bg-indigo-500 md:w-64 hover:bg-indigo-600 rounded-xl"
                    href="#"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 mb-6 lg:w-1/3 lg:mb-0">
                <div className="p-3 mb-6 border border-gray-300 rounded-xl">
                  <ul>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Biography
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Job Experience
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Skills
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Language
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
              <div className="w-full px-4 lg:w-2/3">
                <div className="p-8 border border-gray-300 rounded-xl">
                  <div className="pb-6 mb-8 border-b border-gray-400">
                    <h3 className="mb-6 text-lg font-semibold text-black">
                      Biography
                    </h3>
                    <p className="mb-4 font-medium leading-normal text-gray-900">
                      {profile.bio}
                    </p>
                  </div>
                  <div className="pb-8 mb-8 border-b border-gray-400">
                    <div className="flex flex-wrap items-center justify-between -mb-4">
                      <h3 className="mb-4 text-lg font-semibold text-black">
                        Tech stack
                      </h3>
                      <div className="mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 p-1 mr-4 bg-gray-300 rounded-lg">
                          <img
                            src="trizzle-assets/logos/html5-logo.svg"
                            alt=""
                          />
                        </div>
                        <div className="inline-flex items-center justify-center w-12 h-12 p-1 mr-4 bg-gray-300 rounded-lg">
                          <img
                            src="trizzle-assets/logos/css3-logo.svg"
                            alt=""
                          />
                        </div>
                        <div className="inline-flex items-center justify-center w-12 h-12 p-1 bg-gray-300 rounded-lg">
                          <img
                            src="trizzle-assets/logos/javascript-logo.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-6 text-lg font-semibold text-black">
                      Career Preference
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
