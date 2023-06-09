import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Loading from '../../../components/Loading';

const Home = () => {
  return (
    <>
      <Head>
        <title>Onboarding - Homies</title>
      </Head>
      <div className="min-h-screen from-purple-50 bg-gradient-to-b pb-10 to-purple-100">
        <div className="w-full max-w-lg mx-auto py-5 px-4">
          <div className="flex items-center justify-between mt-2 mb-6">
            <Image
              width={390}
              height={124}
              className="w-32 h-auto rounded-t-md"
              src="/images/logo.png"
              alt="Homies Photo Collage"
            />
          </div>

          <div className="bg-white pt-6 items-center justify-center shadow-md rounded px-8 pb-8 mb-8">
            <Loading />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { req } = context;
  const protocol = req.headers['x-forwarded-proto'] || 'http'; // Use the appropriate protocol (e.g., "https" when using SSL)
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const cookies = req.headers.cookie;
  const publicURL = `${protocol}://${host}`;
  try {
    const response = await axios.get(`${publicURL}/api/profile/onboarding`, {
      headers: {
        cookie: cookies,
      },
    });
    const steps = response.data;
    const currentStep = steps[0] || 'complete';

    return {
      redirect: {
        destination: `/profile/onboarding/${currentStep}`,
        permanent: false,
      },
    };
  } catch (error) {
    console.error('Failed to fetch user progress:', error);
    return {
      redirect: {
        destination: '/profile/onboarding/complete',
        permanent: false,
      },
    };
  }
}

export default Home;
