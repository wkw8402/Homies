import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Head from 'next/head';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import Loading from '../../components/Loading';
import { getOnboardingStep } from './onboarding-step';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/');
  }

  console.log('🦎session', session);

  let steps;
  try {
    steps = await getOnboardingStep(session);
  } catch (error) {
    console.error('Failed to fetch user progress:', error);
    throw error;
  }
  const currentStep = steps[0] || 'complete';

  if (currentStep !== 'complete') {
    console.log('redirecting ', `/onboarding/${currentStep}`);
    return redirect(`/onboarding/${currentStep}`);
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
