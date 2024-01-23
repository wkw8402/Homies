import { onboardingPages } from '@/lib/onboardingPages';

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
