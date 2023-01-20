import Link from 'next/link';
import React from 'react';
export default function AboutTeam() {
  return (
    <section className="relative w-full px-4 py-16 sm:py-24 sm:px-6 xl:px-8">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="grid gap-16 lg:grid-cols-2 xl:grid-cols-11 lg:gap-12 xl:gap-24">
          <div className="flex flex-col justify-center lg:col-span-1 xl:col-span-6 lg:order-2">
            <div>
              <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                Supporting people with disabilities
              </span>
            </div>
            <h2 className="mt-4 text-purple-900 sm:mt-5 h2">
              Not just caregivers, <br />
              but life-long connections
            </h2>
            <p className="max-w-xl mt-4 text-xl leading-relaxed text-purple-800 md:mt-5">
              Become a supportive roommate for people with disabilities. We
              provide training and support to help you succeed.
            </p>

            <div className="relative max-w-4xl mt-16 bg-yellow-100 rounded-xl sm:mt-14">
              <span className="absolute flex items-center justify-center shadow-md left-6 sm:left-10 -top-7 rounded-2xl w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-purple-50"
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
                  <circle cx="15" cy="15" r="3" />
                  <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                  <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                  <line x1="6" y1="9" x2="18" y2="9" />
                  <line x1="6" y1="12" x2="9" y2="12" />
                  <line x1="6" y1="15" x2="8" y2="15" />
                </svg>
              </span>
              <div className="px-4 py-10 mt-2 sm:px-10 sm:py-12">
                <p className="text-lg font-semibold text-purple-900 sm:text-xl">
                  We are looking for people who are passionate about helping
                  others and want to make a difference in the lives of people
                  with disabilities.
                </p>

                <ul className="mt-5 space-y-5 text-lg text-purple-800">
                  <li className="flex items-center">
                    <img
                      className="flex-shrink-0 mr-3 w-7 h-7"
                      src="/icons/checkmark.svg"
                    />
                    <svg
                      className="flex-shrink-0 hidden w-6 h-6 mr-3"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="text-green-500 fill-current"
                        cx="12"
                        cy="12"
                        r="12"
                      />
                      <path
                        className="text-white fill-current"
                        d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z"
                      />
                    </svg>
                    <span>Looking for a home or have a spare bedroom</span>
                  </li>

                  <li className="flex items-center">
                    <img
                      className="flex-shrink-0 mr-3 w-7 h-7"
                      src="/icons/checkmark.svg"
                    />
                    <svg
                      className="flex-shrink-0 hidden w-6 h-6 mr-3"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="text-green-500 fill-current"
                        cx="12"
                        cy="12"
                        r="12"
                      />
                      <path
                        className="text-white fill-current"
                        d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z"
                      />
                    </svg>
                    <span>Be able to pass a background check</span>
                  </li>

                  <li className="flex items-center">
                    <img
                      className="flex-shrink-0 mr-3 w-7 h-7"
                      src="/icons/checkmark.svg"
                    />
                    <svg
                      className="flex-shrink-0 hidden w-6 h-6 mr-3"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="text-green-500 fill-current"
                        cx="12"
                        cy="12"
                        r="12"
                      />
                      <path
                        className="text-white fill-current"
                        d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z"
                      />
                    </svg>
                    <span>A supplement to your day job</span>
                  </li>

                  <li className="flex items-center">
                    <img
                      className="flex-shrink-0 mr-3 w-7 h-7"
                      src="/icons/checkmark.svg"
                    />
                    <svg
                      className="flex-shrink-0 hidden w-6 h-6 mr-3"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="text-green-500 fill-current"
                        cx="12"
                        cy="12"
                        r="12"
                      />
                      <path
                        className="text-white fill-current"
                        d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z"
                      />
                    </svg>
                    <span>Creating a positive and safe space to grow</span>
                  </li>

                  <li className="flex items-center">
                    <img
                      className="flex-shrink-0 mr-3 w-7 h-7"
                      src="/icons/checkmark.svg"
                    />
                    <svg
                      className="flex-shrink-0 hidden w-6 h-6 mr-3"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="text-green-500 fill-current"
                        cx="12"
                        cy="12"
                        r="12"
                      />
                      <path
                        className="text-white fill-current"
                        d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z"
                      />
                    </svg>
                    <span>
                      Have a love and passion for helping people with
                      disabilities
                    </span>
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="mt-10 font-medium text-white bg-purple-600 btn-sm hover:bg-purple-500 group"
                >
                  Become a supportive roommate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-3 group-hover:animate-horizontal-bounce"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <line x1="15" y1="16" x2="19" y2="12"></line>
                    <line x1="15" y1="8" x2="19" y2="12"></line>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid w-full gap-10 mx-auto sm:gap-8 lg:col-span-1 xl:col-span-5 lg:mt-20 sm:grid-cols-2 lg:gap-4 xl:gap-8 lg:order-1 sm:max-w-none sm:mx-0">
            <div className="relative lg:col-span-6">
              <div className="relative sm:pl-36 lg:pl-20 xl:pl-32">
                <div className="aspect-w-3 aspect-h-4 rounded-2xl">
                  <img
                    className="object-cover rounded-2xl"
                    src="/images/home-supportive-roommate-1.jpeg"
                    alt="Home blocks 01"
                  />
                </div>
                <div className="absolute bottom-0 left-0 hidden sm:block sm:translate-y-1/3 sm:w-72 sm:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-3xl">
                  <img
                    className="object-cover w-full h-full rounded-3xl"
                    src="/images/home-supportive-roommate-2.jpeg"
                    alt="Home blocks 02"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
