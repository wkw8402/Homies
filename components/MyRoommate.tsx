import MyRoommateForm from './MyRoommateForm';

const roommateOptions = [
  'Friend',
  'Family member',
  'Neighbor',
  'Co-worker',
  'Former or current staff member',
  'Someone from your school or university',
  'Someone from your church or place of worship',
  'Someone from your volunteer group',
];

export default function MyRoommate() {
  return (
    <>
      <section className="px-4 pt-16 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative">
            <h2 className="mx-auto text-center text-purple-900 h1">
              Already have a Supportive Roommate?
            </h2>
            <p className="mx-auto mt-4 text-xl leading-relaxed prose prose-lg text-center text-purple-800 sm:prose-xl sm:mt-5">
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
          </div>

          <div className="mx-auto prose prose-lg mt-14 sm:mt-16 lg:mt-24 sm:prose-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              pretium fusce id velit ut. Id porta nibh venenatis cras sed felis
              eget velit. Ut morbi tincidunt augue interdum velit. Ipsum
              faucibus vitae aliquet nec ullamcorper sit amet. Viverra orci
              sagittis eu volutpat odio facilisis mauris. Diam quis enim
              lobortis scelerisque fermentum. Viverra mauris in aliquam sem
              fringilla.
            </p>
            <p>
              If you don't already have someone in mind, please don't hesitate
              to reach out to us. We would be more than happy to help you find
              the perfect supportive roommate.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-12 overflow-hidden lg:pt-12 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <div className="relative z-10 w-full px-4 py-6 mx-auto bg-white shadow-xl sm:py-10 sm:rounded-3xl lg:mr-0 lg:ml-auto sm:p-16 lg:p-12 xl:p-14">
              <MyRoommateForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
