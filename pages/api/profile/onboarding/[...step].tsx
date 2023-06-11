import { NextApiHandler } from 'next';
import { getSession } from 'next-auth/react';
import { onboardingPages } from '../../../../lib/onboardingPages';
import { prisma } from '../../../../lib/prismadb';

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req });

  // currentStep
  const stepArray = req.query.step;
  const step = (stepArray as string[])?.toString().split(',').join('/');

  if (req.method === 'GET') {
    const currentStep: any = onboardingPages.find((page) => page.step === step);

    if (!session) {
      res.status(200).json({});
    }

    console.log(session);

    if (!currentStep) {
      res.status(404).json({ message: 'Not found' });
    }

    const dbData = {};

    for (const block of currentStep.blocks || []) {
      const tableName = block.dbField.split('.')[0];
      const columnName = block.dbField.split('.')[1];
      const fieldName = block.fieldName;

      console.log('tableName', tableName);
      console.log('columnName', columnName);
      console.log('fieldName', fieldName);

      console.log('session?.user?.id', session?.user?.id);

      // add promises to a list, we will await them all later
      dbData[fieldName] = prisma[tableName]
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

    res.status(200).json(dbData);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
