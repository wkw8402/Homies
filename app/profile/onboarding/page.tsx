import { getData } from '@/lib/helpers';
import Head from 'next/head';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import Loading from '../../../components/Loading';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let response;
  try {
    response = await getData(
      `${process.env.NEXTAUTH_URL}/api/profile/onboarding`
    );
  } catch (error) {
    console.error('Failed to fetch user progress:', error);
    throw error;
  }
  console.log(response.body);
  const steps = response.body;
  const currentStep = steps[0] || 'complete';

  if (currentStep !== 'complete') {
    console.log('redirecting ', `/profile/onboarding/${currentStep}`);
    return redirect(`/profile/onboarding/${currentStep}`);
  }

  if (response.status !== 200) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>Onboarding - Homies</title>
      </Head>
      <div className="w-full min-h-screen pb-10 from-purple-50 bg-gradient-to-b to-purple-100">
        <div className="w-full max-w-lg px-4 py-5 mx-auto">
          <div className="flex items-center justify-between mt-2 mb-6">
            <Image
              width={390}
              height={124}
              className="w-32 h-auto rounded-t-md"
              src="/images/logo.png"
              alt="Homies Photo Collage"
            />
          </div>

          <div className="items-center justify-center px-8 pt-6 pb-8 mb-8 bg-white rounded shadow-md">
            <Loading />
          </div>
        </div>
      </div>
    </>
  );
}
