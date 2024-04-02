import { prisma } from '@/lib/prismadb';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    const user = await prisma.user.findUnique({
      where: {
        id: session?.user?.id,
      },
      select: {
        id: true,
        admin: true,
        onboardingCompleted: true,
      },
    });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
}