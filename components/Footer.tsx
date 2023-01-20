import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="px-4 pt-16 space-y-8 bg-yellow-100 divide-y sm:pt-20 sm:px-6 lg:px-8 divide-purple-400/20">
      <div className="grid max-w-md mx-auto gap-y-8 sm:gapy-12 sm:gap-x-8 md:gap-x-12 sm:max-w-none lg:max-w-screen-2xl sm:grid-cols-2 lg:grid-cols-11 lg:gap-8 xl:gap-12">
        <div className="flex flex-col lg:mx-auto lg:col-span-4">
          <div className="flex items-center">
            <div className="flex-grow-0 flex-shrink-0 w-60">
              <Link href="/">
                <Image
                  width={100}
                  height={100}
                  className="h-auto"
                  src="/images/logo.png"
                  alt="Homies"
                />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-lg text-purple-800">
            California's first shared-living program for adults with
            disabilities.
          </div>
          <div className="w-full mt-5 lg:mt-6"></div>
        </div>
        <div className="flex-shrink sm:order-3 lg:order-none lg:col-span-2"></div>
        <div className="flex-shrink sm:order-4 lg:order-none lg:col-span-2">
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">Site Links</span>
          </h6>
          <ul className="mt-6 text-lg divide-y divide-purple-400/20">
            <li className="py-2 font-medium text-purple-700 duration-300 ease-in-out hover:text-purple-600">
              <Link href="privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="sm:order-2 lg:order-none lg:col-span-3 lg:mx-auto">
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">Contact Us</span>
          </h6>
          <ul className="flex flex-col mt-6 space-y-5">
            <li className="flex flex-shrink-0">
              <div>
                <span className="flex items-center justify-center bg-purple-200 rounded-2xl w-11 h-11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-700"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </span>
              </div>
              <div className="flex-1 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Email
                </h5>
                <p className="mt-0.5 text-sm text-purple-800 leading-relaxed text-opacity-90">
                  <a href="mailto:hello@meethomies.com">hello@meethomies.com</a>
                </p>
              </div>
            </li>

            <li className="flex flex-shrink-0">
              <div>
                <span className="flex items-center justify-center rounded-2xl w-11 h-11 bg-rose-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-700"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                </span>
              </div>
              <div className="flex-1 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Phone
                </h5>
                <p className="mt-0.5 text-sm text-purple-800 leading-relaxed text-opacity-90">
                  <a href="tel:+19512918279">(951) 291-8279</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between max-w-md py-8 mx-auto sm:flex-row sm:max-w-none lg:max-w-screen-2xl">
        <span className="text-sm text-purple-800/90">
          Copyright &copy; 2022-2023 Homies&trade; — All rights reserved.
        </span>
      </div>
    </footer>
  );
}
