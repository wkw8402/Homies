import { NextApiHandler } from 'next';
import { getSession } from 'next-auth/react';
import { onboardingPages } from '../../../../lib/onboardingPages';
import { prisma } from '../../../../lib/prismadb';

let userDB = {
  completedSteps: [],
};

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req });

  const allSteps = onboardingPages.map((page) => page.step);

  console.log('session', session);
  console.log(req.method, req.body);

  if (req.method === 'GET') {
    let missingSteps = [];

    if (session) {
      missingSteps = allSteps.filter(
        (step) =>
          !userDB.completedSteps.includes(step) &&
          step.indexOf('get-started') === -1
      );
    } else {
      missingSteps = allSteps;
    }

    res.status(200).json(missingSteps);
  } else if (req.method === 'POST') {
    const data = req.body;
    const promises = [];

    for (const tableName of Object.keys(data)) {
      const table = prisma[tableName];

      if (!table) {
        res.status(400).json({ message: `Table ${tableName} does not exist.` });
        return;
      }

      const columns = data[tableName];

      for (const columnName of Object.keys(columns)) {
        let update = null;

        update = table.upsert({
          where:
            tableName === 'user'
              ? { id: session?.user?.id }
              : { userId: session?.user?.id },
          update: {
            [columnName]: columns[columnName],
          },
          create: {
            [columnName]: columns[columnName],
            [tableName === 'user' ? 'id' : 'userId']: session?.user?.id,
          },
        });

        promises.push(update);
      }
    }

    await Promise.all(promises);

    res.status(200).json({ message: 'Data updated successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
