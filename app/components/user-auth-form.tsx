'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ reValidateMode: 'onChange' });

  async function onSubmit({ email }) {
    setIsLoading(true);

    try {
      await signIn('email', { callbackUrl: '/onboarding/name', email });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center space-y-2 text-center">
        <Image
          src={'/images/logo.png'}
          alt="logo"
          className="absolute mb-4 top-6"
          width={100}
          height={33.6}
        />
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome to Homies
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to sign in or create a profile.
        </p>
      </div>
      <div className={cn('grid gap-6', className)} {...props}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                {...register('email', {
                  required: 'Please enter your email address',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })} // Register email with react hook form
              />
              {errors.email?.message && (
                <p className="my-1 text-sm italic text-red-500">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
            <Button disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
              )}
              Continue with Email
            </Button>
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-background text-muted-foreground">OR</span>
          </div>
        </div>
        <Button 
          variant="outline" 
          type="button" 
          onClick={() => signIn('google', { callbackUrl: `${window.location.origin}/dashboard` })} //or just dashboard
          disabled={isLoading}>
          {isLoading ? (
            <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Icons.google className="w-4 h-4 mr-2" />
          )}{' '}
          Continue with Google
        </Button>
      </div>
      <p className="px-8 text-xs text-center text-muted-foreground">
        By continuing, you agree to the{' '}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms
        </Link>{' '}
        and{' '}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </>
  );
}
