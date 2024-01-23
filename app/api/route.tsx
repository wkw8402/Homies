import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  return NextResponse.json({
    id: session?.user?.id,
    name: session?.user?.name,
    email: session?.user?.email,
  });
}
