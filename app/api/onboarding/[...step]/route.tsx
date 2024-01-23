import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import { onboardingPages } from '../../../../lib/onboardingPages';
import { prisma } from '../../../../lib/prismadb';

export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: { step: string[] } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/onboarding/get-started');
  }

  // get current step from URL
  const stepArray = params.step;
  const step = (stepArray as string[])?.toString().split(',').join('/');

  const currentStep: any = onboardingPages.find((page) => page.step === step);

  if (!currentStep) {
    return NextResponse.json(JSON.stringify({ message: 'Not found' }), {
      status: 404,
    });
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

  return NextResponse.json(dbData);
}
