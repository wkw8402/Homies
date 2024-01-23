import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { onboardingPages } from '../../../../lib/onboardingPages';
import { prisma } from '../../../../lib/prismadb';

let userDB = {
  completedSteps: [] as string[],
};

export const dynamic = 'force-dynamic';

const allSteps = onboardingPages.map((page) => page.step);

export const GET = async (req: NextRequest, res) => {
  const session = await getServerSession(authOptions);

  console.log('session', session);
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

  return NextResponse.json({ status: 200, body: missingSteps });
};

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);
  const data = await req.json();
  const promises: any = [];

  for (const tableName of Object.keys(data)) {
    const table = prisma[tableName];

    if (!table) {
      return NextResponse.json({
        status: 400,
        body: { message: `Table ${tableName} does not exist.` },
      });
    }

    const columns = data[tableName];

    for (const columnName of Object.keys(columns)) {
      console.log(
        `➡️&nbsp; Upserting ${columns[columnName]} to ${tableName}.${columnName}`
      );

      const update = table.upsert({
        where:
          tableName === 'user'
            ? { id: session?.user?.id }
            : { userId: session?.user?.id },
        update: {
          [columnName]: columns[columnName],
        },
        create: {
          [columnName]: columns[columnName],
          ...(tableName === 'user'
            ? { id: session?.user?.id }
            : { userId: session?.user?.id }),
        },
      });

      promises.push(update);
    }
  }

  await prisma.$transaction(promises);

  return NextResponse.json({ message: 'Data updated successfully' });
};
