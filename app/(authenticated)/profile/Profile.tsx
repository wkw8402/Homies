'use client';

import ProfileForm from '@/components/ProfileForm';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Profile } from '@prisma/client';
import ImageUploader from '@/components/ImageUploader';

const MyProfile = ({
  session,
  profile,
}: {
  session: any;
  profile: Profile;
}) => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-25 to-purple-50">
        <section className="py-16 overflow-hidden xl:pb-56">
          <div className="container px-4 mx-auto">
            <div className="max-w-md mx-auto text-center">
              <h2 className="mb-4 text-5xl font-bold leading-tight text-center font-heading tracking-px-n">
                My Homies Profile
              </h2>
              <p className="mb-12 text-lg font-medium leading-normal text-gray-600">
                Please note the data shared will be visible on your public
                profile. You can always make updates.
              </p>

              <>
                <p className="mb-4 text-left text-gray-600">
                  Logged in as: <b>{session?.user?.email}</b>{' '}
                  <button
                    className="font-medium text-indigo-600 underline"
                    onClick={() => signOut()}
                  >
                    (sign out)
                  </button>
                </p>
                <ImageUploader />
                <ProfileForm session={session} profile={profile} />
                {profile && (
                  <div className="flex flex-col space-y-4">
                    <Link target={'_blank'} href={`/profile/${profile?.id}`}>
                      View Public Profile
                    </Link>
                  </div>
                )}
              </>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyProfile;