import RoommateForm from './RoommateForm';

const roommateOptions = [
  'Friend',
  'Family member',
  'Neighbor',
  'Co-worker',
  'Former or current staff member',
  'Someone from your school or university',
  'Someone from your place of worship',
  'Someone from your volunteer group',
];

export default function Roommate() {
  return (
    <>
      <section className="px-4 pt-16 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative">
            <h2 className="mx-auto text-center text-purple-900 h2">
              Finding Your Supportive Roommate
            </h2>
            <p className="mx-auto mt-4 text-xl leading-relaxed prose prose-lg text-center text-purple-800 sm:prose-xl sm:mt-12">
              You may already know someone who would make a great supportive
              roommate for you. Below is a list of potential roommates we think
              would be a good match for you:
            </p>
            <div className="max-w-4xl mx-auto mt-8 text-xl leading-relaxed text-center text-purple-800 sm:mt-12">
              <ul className="flex flex-wrap items-center justify-center -mx-3 -my-2 text-lg text-purple-800">
                {roommateOptions.map((option) => (
                  <li key={option} className="flex items-center mx-3 my-2">
                    <img
                      className="flex-shrink-0 mr-3 w-7 h-7"
                      src="/icons/checkmark.svg"
                    />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mx-auto mt-12 text-xl leading-relaxed prose prose-lg text-center text-purple-800 sm:prose-xl">
              If you don't already have someone in mind, please don't hesitate
              to reach out to us. We would be more than happy to help you find
              the perfect supportive roommate.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-48 overflow-hidden lg:pt-12 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="w-full px-4 py-6 mx-auto bg-white shadow-xl sm:py-10 sm:rounded-3xl lg:mr-0 lg:ml-auto sm:p-16 lg:p-12 xl:p-14">
            <RoommateForm />
          </div>
        </div>
      </section>
    </>
  );
}
