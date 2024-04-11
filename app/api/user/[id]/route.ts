import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { prisma } from '../../../../lib/prismadb'; 
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET Request for User
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id: userId } = params;

  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ status: 401, message: 'Unauthorized' });
    }

    const userWithContacts = await prisma.user.findUnique({
      where: { id: userId },
      include: { contacts: true },
    });

    if (!userWithContacts) {
      return NextResponse.json({ status: 404, message: 'User not found' });
    }
    return NextResponse.json(userWithContacts);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
}

// PUT Request for User
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id: userId } = params;
  const data = await req.json(); // { userData: {}, contactsData: [] }

  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ status: 401, message: 'Unauthorized' });
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: data.userData,
    });

    await prisma.contact.deleteMany({
      where: { userId: userId },
    });

    const updatedContacts = await prisma.contact.createMany({
      data: data.contactsData.map(contact => ({ ...contact, userId })),
    });

    return NextResponse.json({ updatedUser, updatedContacts });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
}