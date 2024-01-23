import { onboardingPages } from '@/lib/onboardingPages';
import { prisma } from '@/lib/prismadb';
import { redirect } from 'next/navigation';

let userDB = {
  completedSteps: [] as string[],
};

const allSteps = onboardingPages.map((page) => page.step);

export const getOnboardingStep = async (session) => {
  let missingSteps: any = [];

  // TODO: get the fields that are missing

  if (session) {
    missingSteps = allSteps.filter(
      (step) =>
        !userDB.completedSteps.includes(step) &&
        step.indexOf('get-started') === -1
    );
  } else {
    missingSteps = allSteps;
  }

  return missingSteps;
};

export async function getSavedData(step, session) {
  const currentStep: any = onboardingPages.find((page) => page.step === step);

  if (!session) {
    return redirect('/profile/onboarding/get-started');
  }

  if (!currentStep) {
    // not found
    return null;
  }

  const dbData = {};

  for (const block of currentStep.blocks || []) {
    const tableName = block.dbField.split('.')[0];
    const columnName = block.dbField.split('.')[1];
    const fieldName = block.fieldName;

    // add promises to a list, we will await them all later
    dbData[fieldName] = (prisma[tableName] as any)
      .findUnique({
        where: {
          [tableName === 'user' ? 'id' : 'userId']: session?.user?.id,
        },
      })
      .then((data) => (data ? data[columnName] : undefined));
  }

  // Ensure all Prisma queries have finished before continuing
  for (const fieldName in dbData) {
    // Await each promise and store the result back in dbData
    dbData[fieldName] = await dbData[fieldName];
  }

  return dbData;
}
