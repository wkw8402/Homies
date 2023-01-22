import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prismadb';

// POST /api/profile
// Required fields in body: name
// Optional fields in body: phone
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, location, bio } = req.body;

  if (req.method === 'POST') {
    const session = await getSession({ req });
    if (session) {
      const currentProfile = await prisma.profile.findUnique({
        where: {
          userId: session?.user?.id,
        },
      });

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
      res.status(200).json({});
    } else {
      res.status(401).send({ message: 'Unauthorized' });
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
}
