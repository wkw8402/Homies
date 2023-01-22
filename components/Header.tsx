import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <div className="hidden px-4 md:block sm:px-6">
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
                      <a href="tel:+19512918279">(951) 291-8279</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6">
        <nav className="flex items-center max-w-screen-xl pt-5 mx-auto">
          <div className="flex items-center justify-between w-full">
            <div className="items-center justify-between hidden md:flex md:space-x-6 lg:space-x-10">
              <Link href="/" className="hover:no-underline">
                <div className="relative p-0.5 group">
                  <span className="relative z-10 text-lg font-medium text-purple-700 duration-300 ease-in-out group-hover:text-purple-600">
                    Home
                  </span>
                  <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                </div>
              </Link>
              <Link href="/roommate" className="hover:no-underline">
                <div className="relative p-0.5 group">
                  <span className="relative z-10 text-lg font-medium text-purple-700 duration-300 ease-in-out group-hover:text-purple-600">
                    Finding Your Roommate
                  </span>
                  <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                </div>
              </Link>

              {/* <div className="relative" x-data="{ open: false }">
                <button
                  type="button"
                  aria-expanded="false"
                  onClick={() => setOpen(!open)}
                >
                  <div className="relative p-0.5 group">
                    <span className="relative z-10 flex items-center text-lg font-medium text-purple-700 duration-300 ease-in-out group-hover:text-purple-600">
                      Programs
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={classNames(
                          open && 'rotate-180',
                          'ml-1.5 w-5 h-5 transform duration-300 ease-in-out'
                        )}
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                    <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                  </div>
                </button>

                <div
                  className={classNames(
                    open ? '' : 'hidden',
                    'absolute z-20 w-screen max-w-xs p-4 mt-3 -translate-x-1/2 bg-white border shadow-lg left-1/2 border-gray-50 rounded-2xl'
                  )}
                  // x-show="open"
                  // x-transition:enter="transition ease-out duration-300"
                  // x-transition:enter-start="opacity-0 -translate-y-5"
                  // x-transition:enter-end="opacity-100 translate-y-0"
                  // x-transition:leave="transition ease-in duration-200"
                  // x-transition:leave-start="opacity-100 translate-y-0"
                  // x-transition:leave-end="opacity-0 -translate-y-5"
                >
                  <div
                  // @click.away="open = false"
                  // @keydown.escape.window="open = false"
                  // onKeyDown={(e)=>e}
                  >
                    <a
                      href="/program.html"
                      className="block w-full py-4 transition duration-200 ease-in-out rounded-xl sm:p-5 hover:bg-purple-25 group"
                    >
                      <h5 className="text-lg font-semibold text-purple-600">
                        Toddler Program
                      </h5>
                      <p className="mt-1 text-sm text-purple-800 opacity-90">
                        Curabitur non nulla sit amet nisl tempu convallis quis
                        ac lectus.
                      </p>
                    </a>
                    <hr className="my-1 border-purple-200/30 sm:my-2" />
                    <a
                      href="/program.html"
                      className="block w-full py-4 transition duration-200 ease-in-out rounded-xl sm:p-5 hover:bg-purple-25 group"
                    >
                      <h5 className="text-lg font-semibold text-purple-600">
                        Preschool
                      </h5>
                      <p className="mt-1 text-sm text-purple-800 opacity-90">
                        Curabitur non nulla sit amet nisl tempu convallis quis
                        ac lectus.
                      </p>
                    </a>
                    <hr className="my-1 border-purple-200/30 sm:my-2" />
                    <a
                      href="/program.html"
                      className="block w-full py-4 transition duration-200 ease-in-out rounded-xl sm:p-5 hover:bg-purple-25 group"
                    >
                      <h5 className="text-lg font-semibold text-purple-600">
                        Kindergarten
                      </h5>
                      <p className="mt-1 text-sm text-purple-800 opacity-90">
                        Curabitur non nulla sit amet nisl tempu convallis quis
                        ac lectus.
                      </p>
                    </a>
                    <hr className="my-1 border-purple-200/30 sm:my-2" />
                    <a
                      href="/program.html"
                      className="block w-full py-4 transition duration-200 ease-in-out rounded-xl sm:p-5 hover:bg-purple-25 group"
                    >
                      <h5 className="text-lg font-semibold text-purple-600">
                        Elementary School
                      </h5>
                      <p className="mt-1 text-sm text-purple-800 opacity-90">
                        Curabitur non nulla sit amet nisl tempu convallis quis
                        ac lectus.
                      </p>
                    </a>
                    <hr className="my-1 border-purple-200/30 sm:my-2" />
                    <a
                      href="/program.html"
                      className="block w-full py-4 transition duration-200 ease-in-out rounded-xl sm:p-5 hover:bg-purple-25 group"
                    >
                      <h5 className="text-lg font-semibold text-purple-600">
                        Summer Camp
                      </h5>
                      <p className="mt-1 text-sm text-purple-800 opacity-90">
                        Curabitur non nulla sit amet nisl tempu convallis quis
                        ac lectus.
                      </p>
                    </a>
                  </div>
                </div>
              </div> */}

              <Link href="/contact" className="hover:no-underline">
                <div className="relative p-0.5 group">
                  <span className="relative z-10 text-lg font-medium text-purple-700 duration-300 ease-in-out group-hover:text-purple-600">
                    Contact Us
                  </span>
                  <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                </div>
              </Link>
            </div>

            <div className="hidden md:block">
              <Link
                className="text-lg font-semibold text-purple-900 bg-yellow-500 btn hover:bg-yellow-600"
                href="/contact"
              >
                Get in touch
              </Link>
            </div>

            <div className="flex-grow-0 flex-shrink-0 block w-40 md:hidden">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  width={160}
                  height={50.75}
                  alt="Homies"
                  className="h-auto"
                />
              </Link>
            </div>

            <div className="block md:hidden">
              <button
                className={classNames(
                  open ? 'js-hamburger-open' : '',
                  'relative z-50 w-6 h-5 transition duration-500 ease-in-out transform rotate-0 cursor-pointer group focus:outline-none'
                )}
                onClick={() => setOpen(!open)}
              >
                <span className="absolute top-0 left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-purple-900 rounded-full opacity-100 group-hover:bg-purple-600"></span>
                <span className="absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-purple-900 rounded-full opacity-100 top-2 group-hover:bg-purple-600"></span>
                <span className="absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-purple-900 rounded-full opacity-100 top-2 group-hover:bg-purple-600"></span>
                <span className="absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-purple-900 rounded-full opacity-100 top-4 group-hover:bg-purple-600"></span>
              </button>

              {/* <!--
          Toggle "js-mobileNav-open" class based on menu state
        --> */}
              <div
                className={classNames(
                  open ? '' : 'hidden',
                  'absolute top-0 left-0 z-40 w-screen px-4 py-16 overflow-y-scroll bg-gradient-to-tr from-purple-600 to-purple-600 sm:px-8'
                )}
                // @keydown.escape.window="open = false"
                // x-transition:enter="transition ease-out duration-300"
                // x-transition:enter-start="opacity-0 -translate-y-full"
                // x-transition:enter-end="opacity-100 translate-y-0"
                // x-transition:leave="transition ease-in duration-200"
                // x-transition:leave-start="opacity-100 translate-y-0"
                // x-transition:leave-end="opacity-0 -translate-y-full"
                // style="display: none"
              >
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <div className="flex flex-col items-center w-full mx-auto space-y-6 justify-evenly">
                    <Link href="/" className="hover:no-underline">
                      <div className="relative p-0.5 group">
                        <span className="relative z-10 text-2xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">
                          Home
                        </span>
                        <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                      </div>
                    </Link>

                    <Link href="/roommate" className="hover:no-underline">
                      <div className="relative p-0.5 group">
                        <span className="relative z-10 text-2xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">
                          Finding a Roommate
                        </span>
                        <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                      </div>
                    </Link>

                    <Link href="/contact" className="hover:no-underline">
                      <div className="relative p-0.5 group">
                        <span className="relative z-10 text-2xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">
                          Contact Us
                        </span>
                        <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                      </div>
                    </Link>

                    {/* <Link
                      className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold leading-normal text-center text-purple-900 duration-300 ease-in-out bg-yellow-400 rounded-full"
                      href="/contact"
                    >

                    </Link> */}
                  </div>
                  {/* <hr className="w-full my-8 border-purple-200 sm:my-10 border-opacity-30" /> */}
                  {/* Call us Email us */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
