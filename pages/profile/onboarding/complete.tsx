import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles: any = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

export default function Realistic() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    fire();
  }, []);

  return (
    <>
      <div className="flex flex-col px-8 text-center justify-center space-y-4 items-center h-screen from-white bg-gradient-to-b pb-10 to-purple-100">
        <CheckCircleIcon className="h-24 w-24 text-green-600 mb-4" />
        <h2 className="text-2xl font-bold text-purple-700 mb-2">
          Thanks for completing your Homies profile!
        </h2>
        <p className="text-purple-600">
          We'll review your responses and call or email you in 1-2 business
          days.
        </p>
        <p className="text-purple-600">
          If you'd like to speak with us sooner, please email us at{' '}
          <a className="underline" href="mailto:hello@meethomies.com">
            hello@meethomies.com
          </a>{' '}
          or call us at <a href="tel:9512918279">951-291-8279</a>.
        </p>
        <p className="text-purple-600">
          You can also review and update your responses{' '}
          <Link href="/profile" className="underline">
            here
          </Link>
          .
        </p>
      </div>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}
