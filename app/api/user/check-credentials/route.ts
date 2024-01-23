import { hashPassword } from '@/lib/helpers';
import { omit } from 'lodash';
import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prismadb';

export const dynamic = 'force-dynamic';

export async function POST(req, res) {
  const data = await req.json();
  const user = await prisma.user.findUnique({
    where: { email: data.email },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      password: true,
    },
  });

  if (user && user.password == hashPassword(data.password)) {
    console.debug('password correct');
    return NextResponse.json({ status: 200, body: omit(user, 'password') });
  } else {
    console.debug('incorrect credentials');
    return NextResponse.json({ status: 400, err: 'Invalid credentials' });
  }
}
