import axios from 'axios';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the multi-step form</h1>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      'http://localhost:3000/api/profile/onboarding'
    );
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
