import { hashPassword } from '@/lib/helpers';
import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prismadb';

export async function POST(req, res) {
  const data = await req.json();

  console.debug('✅ Creating new user', {
    ...data,
  });

  let user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (user) {
    return NextResponse.json({ status: 400, body: 'User already exists' });
  }

  user = await prisma.user.create({
    data: { ...data, password: hashPassword(data.password) },
  });

  return NextResponse.json(user);
}
