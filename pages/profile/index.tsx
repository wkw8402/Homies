import { getSession, signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProfileForm from '../../components/ProfileForm';
import prisma from '../../lib/prismadb';

const MyProfilePage = ({ profile }) => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <>
        <Head>
          <title>California's First Life-Sharing Program | Homies</title>
        </Head>
        <div className="bg-gradient-to-b from-purple-25 to-purple-50">
          <Header />

          <section className="py-16 overflow-hidden xl:pb-56">
            <div className="container px-4 mx-auto">
              <div className="max-w-md mx-auto text-center">
                <h2 className="mb-4 text-5xl font-bold leading-tight text-center font-heading tracking-px-n">
                  Your Homies Profile
                </h2>
                <p className="mb-12 text-lg font-medium leading-normal text-gray-600">
                  Please note the data shared will be visible on your public
                  profile. You can always make updates.
                </p>
                <p className="mb-4 text-left text-gray-600">
                  Logged in as: <b>{session.user.email}</b>{' '}
                  <button
                    className="font-medium text-indigo-600 underline"
                    onClick={() => signOut()}
                  >
                    (sign out)
                  </button>
                </p>
                <ProfileForm profile={profile} />
                {profile && (
                  <div className="flex flex-col space-y-4">
                    <Link target={'_blank'} href={`/profile/${profile?.id}`}>
                      View Public Profile
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>

        <div className="w-full h-40 sm:h-48 xl:h-52 bg-gradient-to-b from-purple-50 to-yellow-100"></div>

        <Footer />
      </>
    );
  } else {
    router.push('/auth/signin');
    return (
      <div>
        You are not logged in! <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
};

export default MyProfilePage;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  let profile = null;

  if (session) {
    profile = await prisma.profile.findUnique({
      select: {
        id: true,
        name: true,
        location: true,
        bio: true,
      },
      where: {
        userId: session.user.id,
      },
    });
  }

  return {
    props: { profile },
  };
}
