import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prismadb';

// POST /api/profile
// Required fields in body: name
// Optional fields in body: phone
export async function POST(req, res) {
  const { name, location, bio } = req.body;

  const session = await getSession({ req });
  if (session) {
    const currentProfile = await prisma.profile.findUnique({
      where: {
        userId: session?.user?.id,
      },
    });

    if (!session?.user?.email) {
      return NextResponse.json({ status: 401, message: 'Unauthorized' });
    }

    let result;
    if (currentProfile) {
      result = await prisma.profile.update({
        where: {
          id: currentProfile.id,
        },
        data: {
          name: name,
          location: location,
          bio: bio,
        },
      });
    } else {
      result = await prisma.profile.create({
        data: {
          name: name,
          location: location,
          bio: bio,
          user: { connect: { email: session?.user?.email } },
        },
      });
    }
    return NextResponse.json({});
  } else {
    return NextResponse.json({ status: 401, message: 'Unauthorized' });
  }
}
