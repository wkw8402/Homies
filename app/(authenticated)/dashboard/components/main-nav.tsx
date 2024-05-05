'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function MainNav(props) {
  const activePath = usePathname();

  const [profileId, setProfileId] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = props.session?.user?.id;

      try {
        const profileRes = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/profile/${userId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application.json',
            },
          }
        );

        const profile = await profileRes.json();
        setProfileId(profile.id);
      } catch (error) {
        console.error('Error retrieving profile:', error);
      }
    };

    const checkIsAdmin = async () => {
      const userId = props.session?.user?.id;

      try {
        const userRes = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${userId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application.json',
            },
          }
        );

        const user = await userRes.json();
        setIsAdmin(user.admin);
      } catch (error) {
        console.error('Error retrieving profile:', error);
      }
    };
    fetchProfile();
    checkIsAdmin();
  }, [props.session?.user?.id]);

  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6 mx-6')}>
      {/* <Image alt="logo" src={'/images/logo.png'} width={80} height={50} /> */}

      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        <div className="relative z-20 flex items-center font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 mr-2"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Homies
        </div>
      </Link>
      <Link
        href="/dashboard"
        className={cn(
          activePath === '/dashboard'
            ? 'text-primary'
            : 'text-muted-foreground',
          'text-sm font-medium transition-colors hover:text-primary'
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/profile"
        className={cn(
          activePath === '/profile' ? 'text-primary' : 'text-muted-foreground',
          'text-sm font-medium transition-colors hover:text-primary'
        )}
      >
        Profile
      </Link>
      <Link
        href={`/settings`}
        className={cn(
          activePath === '/settings' ? 'text-primary' : 'text-muted-foreground',
          'text-sm font-medium transition-colors hover:text-primary'
        )}
        rel="noopener noreferrer"
      >
        Settings
      </Link>
      <Link
        href={`/profile/${profileId}`}
        className={cn(
          activePath === '/profile/share'
            ? 'text-primary'
            : 'text-muted-foreground',
          'text-sm font-medium transition-colors hover:text-primary'
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share
      </Link>
      {isAdmin && (
        <Link
          href="/admin"
          className={cn(
            activePath === '/admin' ? 'text-primary' : 'text-muted-foreground',
            'text-sm font-medium transition-colors hover:text-primary'
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Admin Dashboard
        </Link>
      )}
    </nav>
  );
}
