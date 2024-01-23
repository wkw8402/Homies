import { authOptions } from '@/lib/auth';
import { getData } from '@/lib/helpers';
import { onboardingPages } from '@/lib/onboardingPages';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
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
      return redirect('/');
    }

    const data = await getData(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile/onboarding/${step}`
    );

    console.log('data', data);
    return <FormStep savedData={data} />;
  }
}
