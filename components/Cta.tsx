import Link from 'next/link';
import React from 'react';

export default function CTA() {
  return (
    <section className="py-24 bg-white sm:py-32">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <img className="mx-auto w-72" src="/icons/sunrise.svg" alt="" />
        <h2 className="max-w-3xl mx-auto mt-6 text-center text-purple-900 h1">
          <span className="relative block">
            <span className="relative">
              <img
                className="absolute inset-0 transform translate-y-9 sm:translate-y-11 xl:translate-y-14"
                src="/icons/underline-simple-light-purple.svg"
                alt=""
              />
              <span className="relative">Join the pilot program</span>
            </span>
          </span>
        </h2>
        <div className="flex justify-center mt-12 xl:mt-14">
          <Link href="/contact">
            <a className="text-lg font-semibold text-purple-900 bg-yellow-500 btn hover:bg-yellow-600 group">
              Get started
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
