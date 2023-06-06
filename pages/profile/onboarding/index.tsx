import axios from 'axios';

const Home = () => {
  return <></>;
};

export async function getServerSideProps(context) {
  const { req } = context;
  const protocol = req.headers['x-forwarded-proto'] || 'http'; // Use the appropriate protocol (e.g., "https" when using SSL)
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const publicURL = `${protocol}://${host}`;
  try {
    const response = await axios.get(`${publicURL}/api/profile/onboarding`);
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
