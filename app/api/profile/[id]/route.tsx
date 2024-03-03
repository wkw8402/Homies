import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prismadb';

export async function DELETE(req, res) {
  const postId = req.query.id;

  const session = await getSession({ req });

  if (session) {
    const post = await prisma.profile.delete({
      where: { id: String(postId) },
    });
    return NextResponse.json(post);
  } else {
    return NextResponse.json({ status: 401, message: 'Unauthorized' });
  }
}

export async function GET(req, res) {
  const profileId = res.params.id;  
  const session = await getSession({ req });

  if (session) {
    try {
      const profile = await prisma.profile.findUnique({
        where: { id: String(profileId) },
        include: { user: true }
      });
      if (!profile) {
        return NextResponse.json({ status: 404, message: 'Profile not found' });
      }
      return NextResponse.json(profile)
    } catch (error) {
      return NextResponse.json({ status: 500, message: 'Internal server error', error: error.message });
    }
  } else {
    return NextResponse.json({ status: 401, message: 'Unauthorized' });
  }
}