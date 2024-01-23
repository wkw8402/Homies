'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const activePath = usePathname();

  console.log(activePath);
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
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
        href="/profile/share"
        className={cn(
          activePath === '/profile/share'
            ? 'text-primary'
            : 'text-muted-foreground',
          'text-sm font-medium transition-colors hover:text-primary'
        )}
      >
        Share
      </Link>
    </nav>
  );
}
