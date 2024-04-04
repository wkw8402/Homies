import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { prisma } from '../../../../lib/prismadb';
import { authOptions } from '@/lib/auth';

export async function DELETE(req, res) {
  const postId = req.query.id;

  const session = await getServerSession(authOptions);

  if (session) {
    const post = await prisma.profile.delete({
      where: { id: String(postId) },
    });
    return NextResponse.json(post);
  } else {
    return NextResponse.json({ status: 401, message: 'Unauthorized' });
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id: profileId } = params;

  try {
    const profile = await prisma.profile.findUnique({
      where: { id: profileId },
      include: { user: true },
    });

    if (!profile) {
      return NextResponse.json({ status: 404, message: 'Profile not found' });
    }
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id: profileId } = params;
  const session = await getServerSession(authOptions);
  const data = await req.json();

  if (session) {
    try {
      const profile = await prisma.profile.update({
        where: { id: String(profileId) },
        data,
      });

      return NextResponse.json(profile);
    } catch (error) {
      return NextResponse.json({
        status: 500,
        message: 'Internal server error',
        error: error.message,
      });
    }
  } else {
    return NextResponse.json({ status: 401, message: 'Unauthorized' });
  }
}
