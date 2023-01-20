import React from 'react';
import ContactForm from './ContactForm';

export default function HeroContact() {
  return (
    <section className="px-4 pb-12 overflow-hidden lg:pt-24 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-32 lg:max-w-screen-xl">
        <div className="py-16 lg:py-32">
          <div>
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              Contact us to learn more
            </span>
          </div>
          <h1 className="max-w-md mt-4 text-purple-900 h1">
            Join the Homies pilot program
          </h1>
          <p className="max-w-lg mt-3 text-xl leading-relaxed text-purple-800">
            Please fill out the form to learn more about the Homies pilot
            program and to see if you or a loved one are eligble.
          </p>
        </div>

        <div className="relative">
          <img
            src="/icons/dots-large-grid.svg"
            className="absolute lg:hidden -right-16 -top-12 sm:-top-16 w-80 lg:left-14 lg:-top-16 lg:w-36 opacity-60"
          />
          <img
            src="/icons/dots-grid.svg"
            className="absolute hidden w-40 opacity-75 lg:block -right-16 -top-16 lg:left-14 lg:-top-16 lg:w-36"
          />
          <img
            src="/icons/dots-strip.svg"
            className="absolute hidden w-20 rotate-90 opacity-75 lg:block -right-16 top-1/2"
          />

          <div className="relative z-10 w-full px-4 py-10 mx-auto bg-white shadow-xl rounded-3xl lg:mr-0 lg:ml-auto sm:p-16 lg:p-12 xl:p-14">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
