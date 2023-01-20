import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <header>
        <div className="px-4 sm:px-6">
          <div className="relative max-w-screen-xl py-5 mx-auto border-b border-purple-200/30">
            <div className="flex flex-wrap items-center justify-center sm:justify-between">
              <div className="flex-grow-0 flex-shrink-0 w-40 text-xl font-black">
                <Link href="/">
                  <Image
                    width={160}
                    height={50.75}
                    className="h-auto"
                    src="/images/logo.png"
                    alt="Homies"
                  />
                </Link>
              </div>
              <ul className="hidden space-x-6 md:flex sm:ml-8 xl:space-x-16">
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
                      <a href="mailto:hello@meethomies.com">
                        hello@meethomies.com
                      </a>
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
                      <a href="tel:+19512918279">+1 (951) 291-8279</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
