'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from 'react-avatar';
import { useQuery } from '@tanstack/react-query';

export default function Profile({ profile, id }) {
  const {
    data: profileData,
    isLoading: profileLoading,
    isError: profileError,
  } = useQuery(['profile'], () =>
    fetch(`/api/profile/${id}`).then((res) => res.json())
  );

  return (
    <>
      <div className="">
        <div className="flex items-center justify-center mt-4">
          <Image
            alt="logo"
            src={'/images/logo.png'}
            width={100}
            height={31.64}
          />
        </div>
        <section className="px-4 py-6 sm:px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-6 bg-white border border-gray-300 rounded-xl">
              <div className="relative">
                <div className="block object-cover w-full h-72" />
                <div className="absolute bottom-0 left-0 flex flex-wrap items-end justify-between w-full p-6">
                  <div className="flex items-end w-full mb-5 md:w-auto md:mb-0">
                    <Avatar
                      src="/images/logo.png"
                      className="flex-shrink-0 w-16 h-16 mr-2 border rounded-full sm:w-16 sm:h-16 md:mr-6"
                    />
                    <div className="mb-2 ml-2">
                      <h5 className="text-2xl font-bold text-black">
                        {profileData && profileData.user ? profileData.user.name : ''}
                      </h5>
                      <div className="text-gray-600">
                        Looking for a Supportive Roommate
                      </div>
                    </div>
                  </div>
                  <Link
                    className="inline-block w-full px-6 py-3 font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-full md:w-64 hover:bg-indigo-700"
                    href="/contact"
                  >
                    Contact {profileData && profileData.user ? profileData.user.name : ''}
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3 mb-6 lg:w-1/3 lg:mb-0">
                <div className="p-3 mb-6 bg-white border border-gray-300 rounded-xl">
                  <table className="w-full">
                    <tbody className="bg-white">
                      <tr>
                        <td
                          className={classNames(
                            'border-b border-gray-200',
                            'whitespace-nowrap p-3 text-sm font-medium text-gray-900'
                          )}
                        >
                          Age
                        </td>
                        <td
                          className={classNames(
                            'border-b border-gray-200',
                            'whitespace-nowrap p-3 text-sm text-gray-500 table-cell'
                          )}
                        >
                          21 years old
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={classNames(
                            'border-b border-gray-200',
                            'whitespace-nowrap p-3 text-sm font-medium text-gray-900'
                          )}
                        >
                          Gender
                        </td>
                        <td
                          className={classNames(
                            'border-b border-gray-200',
                            'whitespace-nowrap p-3 text-sm text-gray-500 table-cell'
                          )}
                        >
                          {profileData && profileData.user ? profileData.user.gender : ''}
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={classNames(
                            'whitespace-nowrap p-3 text-sm font-medium text-gray-900'
                          )}
                        >
                          Desired Location
                        </td>
                        <td
                          className={classNames(
                            'whitespace-nowrap p-3 text-sm text-gray-500 table-cell'
                          )}
                        >
                          {profileData && profileData.user ? profileData.user.location : ''}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-3 mb-6 bg-white border border-gray-300 rounded-xl">
                  <ul>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        About Me
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Roommate Preferences
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="p-3 bg-white border border-gray-300 rounded-xl">
                  <ul>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Interest
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-3 py-2 text-sm font-medium leading-6 text-gray-900 transition duration-100 rounded-lg hover:text-white hover:bg-indigo-500"
                        href="#"
                      >
                        Recommendation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-3 lg:w-2/3">
                <div className="p-6 mb-6 bg-white border border-gray-300 rounded-xl">
                  <div className="pb-6 mb-6 border-b border-gray-300">
                    <h3 className="mb-6 text-lg font-semibold text-black">
                      About Me
                    </h3>
                    <p className="mb-4 text-gray-700">{profileData && profileData.user ? profileData.user.bio : ''}</p>
                  </div>

                  <div>
                    <h3 className="mb-6 text-lg font-semibold text-black">
                      Roommate Preferences
                    </h3>
                    <div className="-mb-3 font-medium">
                      <span className="inline-block px-4 py-2 mb-3 mr-3 leading-6 text-gray-900 bg-gray-200 rounded-full">
                        Non-Drinker
                      </span>
                      <span className="inline-block px-4 py-2 mb-3 mr-3 leading-6 text-gray-900 bg-gray-200 rounded-full">
                        Non-Smoker
                      </span>
                      <span className="inline-block px-4 py-2 mb-3 leading-6 text-gray-900 bg-gray-200 rounded-full">
                        Wheelchair Accessibility
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white border border-gray-300 rounded-xl">
                  <h3 className="mb-4 text-lg font-semibold text-black">
                    Interested in living with {profileData && profileData.user ? profileData.user.name : ''}?
                  </h3>
                  <p className="mb-4 text-gray-700">
                    {profileData && profileData.user ? profileData.user.name : ''} is looking for a caregiver-roommate. If you
                    or someone you know might be interested in living with{' '}
                    {profileData && profileData.user ? profileData.user.name : ''}, please contact us or share this profile to
                    help spread the word!
                  </p>
                  <div className="">
                    <Link
                      className="inline-block w-full px-6 py-3 mb-3 mr-3 font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-full md:w-64 hover:bg-indigo-700"
                      href="/contact"
                    >
                      Contact {profileData && profileData.user ? profileData.user.name : ''}
                    </Link>
                    <Link
                      className="inline-block w-full px-6 py-3 font-medium text-center text-gray-900 transition duration-200 border border-gray-400 rounded-full md:w-64 hover:bg-gray-100"
                      href="/contact"
                    >
                      Share Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
