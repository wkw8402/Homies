import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prismadb';

export const dynamic = 'force-dynamic';

export const GET = async (req: NextRequest, { params }: { params: { userId: string } }) => {
  const session = await getServerSession(authOptions);

  if (session) {
    try {
      const { userId } = params;
      const profile = await prisma.profile.findUnique({
        where: {
          userId: userId,
        },
      });
  
      if (!profile) {
        return NextResponse.json({ status: 404, message: "Profile not found" })
      }
      return NextResponse.json(profile);
  
    } catch (error) {
      return NextResponse.json({
        status: 500,
        message: "Internal server error",
        error: error.message
      })
    }
  } else {
    return NextResponse.json({ status: 401, message: 'Unauthorized' });
  }

} 