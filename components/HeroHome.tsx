import Link from 'next/link';

const HeroHome = () => {
  return (
    <section className="px-4 pt-16 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col items-center justify-center lg:items-start lg:col-span-6">
          <div>
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              Welcome to Homies
            </span>
          </div>
          <h1 className="max-w-xl mt-4 text-center text-purple-900 sm:mt-5 lg:text-left h1 lg:max-w-none">
            California's life-sharing program for people with disabilities
          </h1>
          <p className="max-w-2xl mt-3 text-xl leading-loose text-center text-purple-800 lg:text-left">
            Bringing choice and power to the disability industry. Live
            independently and engage in your community. A first-of-its-kind
            shared-living platform designed to build long-lasting connections.
          </p>

          <div className="flex flex-col items-center mt-8 overflow-hidden sm:flex-row">
            <Link
              href="/contact"
              className="text-lg font-semibold text-purple-900 bg-yellow-500 btn hover:bg-yellow-600 group"
            >
              Get in touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-3xl mx-auto mt-16 lg:mt-0 lg:max-w-none lg:col-span-6">
          <div className="relative">
            <img
              className="w-full h-auto rounded-2xl"
              src="/images/hero-home.jpg"
              alt="Homies Photo Collage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
