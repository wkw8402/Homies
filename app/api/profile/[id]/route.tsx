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
