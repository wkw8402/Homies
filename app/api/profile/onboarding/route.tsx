import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prismadb';

export const dynamic = 'force-dynamic';

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
