/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RqfouCAvD1A
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prismadb';
import { Profile } from '@prisma/client';
import { Session } from 'next-auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  let profile: Profile | null = null;

  if (!session) {
    return redirect('/');
  }

  profile = await prisma.profile.findUnique({
    where: {
      userId: session?.user?.id,
    },
  });

  if (!profile) {
    return redirect('/onboarding');
  }

  return <Dashboard session={session} profile={profile} />;
}

const Dashboard = ({
  session,
  profile,
}: {
  session: Session;
  profile: Profile;
}) => {
  const name = session?.user?.name;
  console.log(session);
  console.log(profile);

  return (
    <div className="flex flex-col flex-1 p-4 md:p-10 w-full bg-background text-foreground">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={profile.image || '/placeholder-user.jpg'} />
                <AvatarFallback>{name?.[0]}</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="text-xl font-semibold">{name}</div>
                <div className="text-sm text-muted-foreground">
                  {profile.location}
                </div>
                <div className="text-sm text-muted-foreground">
                  {session.user?.email}
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid gap-2">
              <div className="grid gap-1">
                <div className="text-sm font-medium">About</div>
                <div className="text-sm text-muted-foreground">
                  {profile.bio}
                </div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Interests</div>
                <div className="text-sm text-muted-foreground">
                  {profile.interests.join(', ')}
                </div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Personality Type</div>
                <div className="text-sm text-muted-foreground">
                  {profile.personalityType}
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid gap-2">
              <div className="grid gap-1">
                <div className="text-sm font-medium">Smoking/Drinking/Pets</div>
                <div className="text-sm text-muted-foreground">
                  {`Smoking: ${profile.smoking}, Drinking: ${profile.alcohol}, Pets: ${profile.hasPets}`}
                </div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">
                  Dealing with Roommate Conflicts
                </div>
                <div className="text-sm text-muted-foreground">
                  {profile.roommateConflict}
                </div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Cleaning Frequency</div>
                <div className="text-sm text-muted-foreground">
                  {profile.cleaning}
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid gap-2">
              <div className="grid gap-1">
                <div className="text-sm font-medium">Sleep Schedule</div>
                <div className="text-sm text-muted-foreground">
                  {profile.sleepSchedule}
                </div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Party Preferences</div>
                <div className="text-sm text-muted-foreground">
                  {profile.likesParties}
                </div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">
                  Preferred Communication
                </div>
                <div className="text-sm text-muted-foreground">
                  {profile.communicationMethod}
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid gap-2">
              <div className="grid gap-1">
                <div className="text-sm font-medium">Preferred Gender</div>
                <div className="text-sm text-muted-foreground">
                  {profile.roommateGender.join(', ')}
                </div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Willingness to Share</div>
                <div className="text-sm text-muted-foreground">
                  {profile.roommateSharing}
                </div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Guests</div>
                <div className="text-sm text-muted-foreground">
                  {profile.roommateGuests}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
