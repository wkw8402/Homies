import React from "react";

export default function HomeFeaturesBlocks() {
  return (
    <section className="px-4 pb-16 overflow-hidden bg-yellow-100 sm:pb-24 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative">
          <h2 className="max-w-4xl mx-auto text-center text-purple-900 h2">
            We want to help create your dream living situation
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800">
            Use your California waiver to find your new connection on the Homies
            platform. Welcome to the first step towards an independent life.
          </p>

          <div className="max-w-3xl mx-auto mt-12">
            <ul className="flex flex-wrap items-center justify-center -mx-3 -my-2 text-lg text-purple-800">
              <li className="flex items-center mx-3 my-2">
                <img
                  className="flex-shrink-0 mr-3 w-7 h-7"
                  src="/icons/checkmark.svg"
                />
                <span>Choice</span>
              </li>
              <li className="flex items-center mx-3 my-2">
                <img
                  className="flex-shrink-0 mr-3 w-7 h-7"
                  src="/icons/checkmark.svg"
                />
                <span>Independence</span>
              </li>
              <li className="flex items-center mx-3 my-2">
                <img
                  className="flex-shrink-0 mr-3 w-7 h-7"
                  src="/icons/checkmark.svg"
                />
                <span>Happiness</span>
              </li>
              <li className="flex items-center mx-3 my-2">
                <img
                  className="flex-shrink-0 mr-3 w-7 h-7"
                  src="/icons/checkmark.svg"
                />
                <span>Power</span>
              </li>
              <li className="flex items-center mx-3 my-2">
                <img
                  className="flex-shrink-0 mr-3 w-7 h-7"
                  src="/icons/checkmark.svg"
                />
                <span>Hands-on approach</span>
              </li>
              <li className="flex items-center mx-3 my-2">
                <img
                  className="flex-shrink-0 mr-3 w-7 h-7"
                  src="/icons/checkmark.svg"
                />
                <span>Diverse backgrounds</span>
              </li>
              <li className="flex items-center mx-3 my-2">
                <img
                  className="flex-shrink-0 mr-3 w-7 h-7"
                  src="/icons/checkmark.svg"
                />
                <span>New opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-xl mx-auto mt-16 lg:max-w-none sm:mt-20 lg:mt-24 lg:grid lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-24">
          <div className="relative lg:col-span-6">
            <div className="relative sm:pl-36 lg:pl-20 xl:pl-32">
              <div className="aspect-w-3 aspect-h-4 rounded-2xl">
                <img
                  className="object-cover rounded-2xl"
                  src="/images/home-emmett.jpg"
                  alt="Picture of one of our Homies"
                />
              </div>
              <div className="absolute bottom-0 left-0 hidden sm:block sm:translate-y-1/3 sm:w-72 sm:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-3xl">
                <img
                  className="object-cover w-full h-full rounded-3xl"
                  src="/images/home-spencer.jpg"
                  alt="Picture of one of our Homies"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center mt-16 sm:mt-44 lg:mt-0 lg:col-span-6">
            <div>
              <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                California's first life-sharing program
              </span>
            </div>
            <h3 className="mt-4 text-purple-900 sm:mt-5 h3">
              Serving people with all types of disabilities
            </h3>
            <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
              We offer a wide range of housing options and supportive roommates
              for adults with disabilities. Join the Homies pilot program, open
              to individuals in all California regional centers.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="font-medium text-white bg-purple-600 btn-sm hover:bg-purple-500 group"
              >
                Discover eligibility
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-3 group-hover:animate-horizontal-bounce"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <line x1="15" y1="16" x2="19" y2="12"></line>
                  <line x1="15" y1="8" x2="19" y2="12"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto mt-16 sm:mt-44 lg:mt-56 xl:mt-60 2xl:mt-64 lg:grid lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-24 lg:max-w-none">
          <div className="relative lg:order-2 lg:col-span-6">
            <div className="relative sm:pr-36 lg:pr-20 xl:pr-32">
              <div className="aspect-w-3 aspect-h-4 rounded-3xl">
                <img
                  className="object-cover rounded-3xl"
                  src="/images/home-roommates-2.jpg"
                  alt="Picture of one of our Homies"
                />
              </div>
              <div className="absolute top-0 right-0 hidden sm:block sm:-translate-y-1/3 sm:w-72 sm:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-3xl">
                <img
                  className="object-cover w-full h-full rounded-3xl"
                  src="/images/home-roommates-1.jpg"
                  alt="Picture of one of our Homies"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center mt-16 sm:mt-20 lg:mt-0 lg:order-1 lg:col-span-6">
            <div>
              <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                Build connection and community
              </span>
            </div>
            <h3 className="mt-4 text-purple-900 sm:mt-5 h3">
              Find the perfect roommate for you
            </h3>
            <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
              Based on different interests, hobbies, and needs, we'll help you
              find your perfect roommate to provide the care you need.
            </p>

            <div className="mt-6">
              <a
                href="/contact"
                className="font-medium text-white bg-purple-600 btn-sm hover:bg-purple-500 group"
              >
                Join the pilot program
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-3 group-hover:animate-horizontal-bounce"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <line x1="15" y1="16" x2="19" y2="12"></line>
                  <line x1="15" y1="8" x2="19" y2="12"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
