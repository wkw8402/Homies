import { authOptions } from '@/lib/auth';
import { onboardingPages } from '@/lib/onboardingPages';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { getSavedData } from '../onboarding-step';
import FormStep from './FormStep';

export const dynamic = 'force-dynamic';

export default async function OnboardingPage({
  params: { step: stepArray },
}: {
  params: { step: string[] };
}) {
  const step = stepArray?.toString().split(',').join('/');
  console.log('🪜 Current onboarding step: ', step);

  const onboardingIndex = onboardingPages.findIndex(
    (page) => page.step === step
  );

  const welcomePageIndexes = [0, 1];

  if (welcomePageIndexes.includes(onboardingIndex)) {
    return <FormStep savedData={null} />;
  } else {
    const session = await getServerSession(authOptions);

    if (!session) {
      return redirect('/onboarding/get-started');
    }

    const data = await getSavedData(step, session);

    console.log('data', data);
    return <FormStep savedData={data} />;
  }
}
