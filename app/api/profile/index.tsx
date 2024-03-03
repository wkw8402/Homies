import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prismadb';

// POST /api/profile
// Required fields in body: name
// Optional fields in body: phone
export async function POST(req, res) {
  const { name, location, bio, smoking, interests, interestsOther, alcohol, hasPets, petsDescription, likesPets, roommateConflict: roommateConflict, cleaning, sleepSchedule, likesParties, communicationMethod, roommateGender, roommateSharing, roommateGuests } = req.body;

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
          smoking: smoking,
          interests: interests,
          interestsOther: interestsOther,
          alcohol: alcohol, 
          hasPets: hasPets,
          petsDescription: petsDescription,
          likesPets: likesPets,
          roommateConflict: roommateConflict,
          cleaning: cleaning,
          sleepSchedule: sleepSchedule,
          likesParties: likesParties,
          communicationMethod: communicationMethod,
          roommateGender: roommateGender,
          roommateSharing: roommateSharing,
          roommateGuests: roommateGuests,
          
        },
      });
    } else {
      result = await prisma.profile.create({
        data: {

          name: name,
          location: location,
          bio: bio,
          smoking: smoking,
          interests: interests,
          interestsOther: interestsOther,
          alcohol: alcohol, 
          hasPets: hasPets,
          petsDescription: petsDescription,
          likesPets: likesPets,
          roommateConflict: roommateConflict,
          cleaning: cleaning,
          sleepSchedule: sleepSchedule,
          likesParties: likesParties,
          communicationMethod: communicationMethod,
          roommateGender: roommateGender,
          roommateSharing: roommateSharing,
          roommateGuests: roommateGuests,
          user: { connect: { email: session?.user?.email } },
        },
      });
    }
    return NextResponse.json({});
  } else {
    return NextResponse.json({ status: 401, message: 'Unauthorized' });
  }
}