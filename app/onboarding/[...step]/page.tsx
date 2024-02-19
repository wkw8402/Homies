import { authOptions } from '@/lib/auth';
import { onboardingPages } from '@/lib/onboardingPages';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { getSavedData } from '../onboarding-step';
import FormStep from './FormStep';

// export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const dynamic = 'auto';

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

  const session = await getServerSession(authOptions);
  const data: any = await getSavedData(step, session);

  if (welcomePageIndexes.includes(onboardingIndex)) {
    if (session && !!data?.password) {
      return redirect('/onboarding/name');
    }
    return <FormStep savedData={data} />;
  } else {
    if (!session) {
      return redirect('/onboarding/get-started');
    }

    return <FormStep savedData={data} />;
  }
}
