import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCheck } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export default function VerifyEmailRequest() {
  const session = getServerSession();

  return (
    <>
      <div className="container relative grid flex-col items-center justify-center w-full h-full lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Image
          src={'/images/logo.png'}
          className={cn('absolute lg:hidden left-4 top-4 md:left-8 md:top-8')}
          alt="logo"
          width={120}
          height={38}
        />
        {/* <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          Login
        </Link> */}
        <div className="relative flex-col hidden h-full p-10 text-white bg-muted lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
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
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="max-w-md text-lg">
                Homies is the first of its kind life-sharing program for
                neurodivergent individuals in California.
              </p>
              {/* <footer className="text-sm">Homies</footer> */}
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto items-center flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <CheckCheck className="w-16 h-16 mb-4 text-green-500" />
                <h1 className="text-lg font-semibold">
                  Verify Your Email Address
                </h1>
                <p>Please click the link in your email to continue.</p>
                <Button size={'sm'} className="mt-4">
                  I've clicked the link
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
