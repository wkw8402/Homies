import React from 'react';

export default function Programs() {
  return (
    <section className="px-4 overflow-hidden md:pb-0 sm:pt-24 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto md:max-w-screen-xl">
        <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h2 className="max-w-4xl text-purple-900 h2">
              Make a life,
              <br /> not just a living.
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-xl leading-relaxed text-purple-800 sm:mt-5 lg:text-left">
              Rewarding, meaningful, inspiring change is possible. We can help
              you get there.
            </p>
          </div>
        </div>
        <div className="mt-16 mb-24 md:mt-72 md:-mb-48 md:grid md:grid-cols-2 md:gap-8 lg:gap-16">
          <div className="relative">
            <img
              className="absolute top-0 hidden -translate-y-1/2 md:block left-1/2"
              style={{ width: 'calc(50% + 4rem)' }}
              src="/icons/curved-dotted-line.svg"
              alt=""
            />
            <div className="relative z-10 w-full px-8 py-10 sm:p-12 md:px-8 md:py-10 lg:p-12 bg-purple-25 rounded-3xl">
              <div className="flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-purple-900 h3">
                    Open up your extra bedroom
                  </h3>
                  <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
                    Turn your extra bedroom into an extra source of income while
                    providing a level of support that works for your life.
                  </p>
                  <div className="relative mt-8 aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover rounded-2xl"
                      src="/images/program-01.jpg"
                      alt="Program 01"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="hidden md:block absolute bottom-0 left-1/2 translate-y-[90%]"
              style={{ width: 'calc(50% + 4rem)' }}
              src="/icons/looped-dotted-line.svg"
              alt=""
            />
          </div>
          <div className="relative w-full px-8 py-10 mt-12 bg-yellow-200 sm:p-12 md:mt-0 md:px-8 md:py-10 lg:p-12 md:-translate-y-80 rounded-3xl">
            <div className="flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="text-purple-900 h3">Discover a great match</h3>
                <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
                  Create a detailed profile, connect with individuals who have
                  similar interest &amp; hobbies, meet virtually and in-person.
                </p>
                <div className="relative mt-8 aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover rounded-2xl"
                    src="/images/program-02.png"
                    alt="Program 02"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full px-8 py-10 mt-12 sm:p-12 md:mt-0 md:col-start-2 md:px-8 md:py-10 lg:p-12 md:-translate-y-80 bg-blue-50 rounded-3xl">
            <div className="flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="text-purple-900 h3">
                  Earn an extra tax-free source of income
                </h3>
                <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
                  You can earn up to $40,000 per year tax-free by offering care
                  services in your own home.
                </p>
                <div className="relative mt-8 aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover rounded-2xl"
                    src="/images/program-03.jpg"
                    alt="Program 03"
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
