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

    await signIn('email', { callbackUrl: '/dashboard', email });

    setIsLoading(false);
  }

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome to Homies
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to login or create an account.
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
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })} // Register email with react hook form
              />
              {errors.email?.message && (
                <p className="text-sm text-red-500">
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
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Icons.google className="w-4 h-4 mr-2" />
          )}{' '}
          Continue with Google
        </Button>
      </div>
      <p className="px-8 text-sm text-center text-muted-foreground">
        By clicking continue, you agree to our{' '}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
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
