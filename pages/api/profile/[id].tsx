import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib/prismadb';

// DELETE /api/post/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id;

  const session = await getSession({ req });

  if (req.method === 'DELETE') {
    if (session) {
      const post = await prisma.profile.delete({
        where: { id: String(postId) },
      });
      res.json(post);
    } else {
      res.status(401).send({ message: 'Unauthorized' });
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
}
