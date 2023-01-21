import axios from 'axios';
import classNames from 'classnames';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const RoommateForm = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      roommateName: '',
      roommateKnow: '',
      roommateEmail: '',
      housing: '',
      housingAddress: '',
      reference: '',
      otherDetails: '',
    },
  });

  const name = watch('name');
  const housing = watch('housing');

  const onSubmit = async (data) => {
    setLoading(true);

    const res = await axios({
      method: 'POST',
      url: '/api/roommate',
      data: data,
    })
      .then((res) => {
        setLoading(false);
        return res?.data;
      })
      .catch((e) => {
        alert('An error occurred. See log for details.');
        console.error(e);
      });

    if (res.status === 1) {
      setSuccess(true);
    } else {
      alert(res.message);
    }
  };

  if (success) {
    return (
      <>
        <h3 className="text-2xl font-bold text-purple-900">
          Thank you, {name}!
        </h3>
        <div className="mt-4 space-y-4 font-medium text-purple-900">
          <p>We got your submission. We will be reaching out to you soon.</p>
          <p>
            Please make sure to check your inbox and spam folders for an email
            from us.
          </p>
          <p>
            Sincerely,
            <br />
            The Homies Team ❤️
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <h3 className="mb-4 text-2xl font-bold text-purple-900 leading-tighter">
          I have found my Supportive Roommate
        </h3>
        <p className="text-purple-800 mt-0.5 text-opacity-90">
          Please fill out this form if you have already found your Supportive
          Roommate. You'll need to answer a few questions about your situation.
        </p>
      </div>

      <form
        className="mt-8"
        name="contact-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full mt-12 text-2xl font-semibold border-b border-b-gray-300">
          Your Info
        </div>
        <div className="mt-6">
          <label
            htmlFor="name"
            className="ml-0.5 text-purple-900 font-medium text-lg"
          >
            Full name *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: true })}
            name="name"
            className="w-full p-4 text-lg font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
          />
          {errors.name && (
            <p className="text-sm text-red-500">Please enter your full name</p>
          )}
        </div>

        <div className="mt-6">
          <label
            htmlFor="email"
            className="ml-0.5 text-purple-900 font-medium text-lg"
          >
            Email address *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Please enter your email address',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address',
              },
            })}
            name="email"
            className="w-full p-4 text-lg font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{`${errors.email?.message}`}</p>
          )}
        </div>

        <div className="mt-6">
          <label
            htmlFor="phone"
            className="ml-0.5 text-purple-900 font-medium text-lg"
          >
            Phone number *
          </label>
          <input
            id="phone"
            type="text"
            {...register('phone', {
              required: true,
            })}
            name="phone"
            className="w-full p-4 text-lg font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
          />
          {errors.phone && (
            <p className="text-sm text-red-500">
              Please enter your phone number
            </p>
          )}
        </div>

        <div className="w-full mt-12 text-2xl font-semibold border-b border-b-gray-300">
          Roommate Info
        </div>

        <div className="mt-6">
          <label
            htmlFor="roommateName"
            className="ml-0.5 text-purple-900 font-medium text-lg"
          >
            Roommate's full name *
          </label>
          <input
            id="roommateName"
            type="text"
            {...register('roommateName', { required: true })}
            name="roommateName"
            className="w-full p-4 text-lg font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
          />
          {errors.roommateName && (
            <p className="text-sm text-red-500">
              Please enter your roommate's name
            </p>
          )}
        </div>

        <div className="mt-6">
          <label
            htmlFor="roommateKnow"
            className="ml-0.5 text-purple-900 font-medium text-lg"
          >
            How do you know your roommate? *
          </label>
          <select
            id="roommateKnow"
            {...register('roommateKnow', {
              required: true,
            })}
            name="roommateKnow"
            placeholder="Select an option..."
            className="w-full p-4 text-lg font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
          >
            <option disabled value="">
              Select an option...
            </option>
            <option value="friend">Friend</option>
            <option value="mother">Mother</option>
            <option value="father">Father</option>
            <option value="sister">Sister</option>
            <option value="brother">Brother</option>
            <option value="aunt">Aunt</option>
            <option value="uncle">Uncle</option>
            <option value="cousin">Cousin</option>
            <option value="grandparent">Grandparent</option>
            <option value="classmate">Classmate</option>
            <option value="coworker">Co-worker</option>
            <option value="staff">Former/current staff</option>
            <option value="neighbor">Neighbor</option>
            <option value="religious">Religious Group</option>
            <option value="volunteer">Volunteer Group</option>
            <option value="other">Other</option>
          </select>
          {errors.roommateKnow && (
            <p className="text-sm text-red-500">
              Please select how you know your roommate
            </p>
          )}
        </div>

        <div className="mt-6">
          <label
            htmlFor="roommateEmail"
            className="ml-0.5 text-purple-900 font-medium text-lg"
          >
            Roommate's email address (if you know it)
          </label>
          <input
            id="roommateEmail"
            type="email"
            {...register('roommateEmail', {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address',
              },
            })}
            name="roommateEmail"
            className="w-full p-4 text-lg font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
          />
          {errors.roommateEmail && (
            <p className="text-sm text-red-500">{`${errors.roommateEmail?.message}`}</p>
          )}
        </div>

        <div className="w-full mt-12 text-2xl font-semibold border-b border-b-gray-300">
          Housing
        </div>

        <div className="mt-6">
          <label
            htmlFor="housing"
            className="ml-0.5 text-purple-900 font-medium text-lg"
          >
            Do you have housing already? *
          </label>
          <select
            id="housing"
            {...register('housing', {
              required: 'Please select if you have housing already',
            })}
            name="housing"
            placeholder="Select an option..."
            className="w-full p-4 text-lg font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
          >
            <option disabled value="">
              Select an option...
            </option>
            <option value="yesmine">
              Yes, I have an extra bedroom in my house
            </option>
            <option value="yesroommate">
              Yes, I will be living in my roommate's house
            </option>
            <option value="yestogether">
              Yes, we have picked out housing together
            </option>
            <option value="nolooking">
              No, but we are looking for a place
            </option>
            <option value="nonotstarted">No, we haven't started looking</option>
            <option value="unsure">I am unsure</option>
            <option value="other">Other</option>
          </select>
          {errors.housing && (
            <p className="text-sm text-red-500">{`${errors.housing?.message}`}</p>
          )}
        </div>

        {housing.includes('yes') && (
          <div className="mt-6">
            <label
              htmlFor="housingAddress"
              className="ml-0.5 text-purple-900 font-medium text-lg"
            >
              What is the address? *
            </label>
            <input
              id="housingAddress"
              type="text"
              {...register('housingAddress')}
              name="housingAddress"
              className="w-full p-4 text-lg font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
            />
          </div>
        )}

        <div className="w-full mt-12 text-2xl font-semibold border-b border-b-gray-300">
          Final Details
        </div>

        <div className="mt-6">
          <label
            htmlFor="reference"
            className="ml-0.5 text-purple-900 font-medium text-lg"
          >
            How did you hear about Homies? *
          </label>
          <select
            id="reference"
            {...register('reference', {
              required:
                'Please select where you heard about the Homies program',
            })}
            name="reference"
            placeholder="Select an option..."
            className="w-full p-4 text-lg font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
          >
            <option disabled value="">
              Select an option...
            </option>
            <option value="Facebook">
              Social Media Post (Facebook, Instagram, etc.)
            </option>
            <option value="Facebook">Facebook Group</option>
            <option value="Google">Google Search</option>
            <option value="Friend">Friend</option>
            <option value="Family">Family Member</option>
            <option value="Friend">Another Homie</option>
            <option value="Other">Other</option>
          </select>
          {errors.reference && (
            <p className="text-sm text-red-500">{`${errors.reference?.message}`}</p>
          )}
        </div>

        <div className="mt-6">
          <label
            htmlFor="otherDetails"
            className="ml-0.5 text-purple-900 font-medium text-lg"
          >
            Other details (optional)
          </label>
          <textarea
            id="otherDetails"
            {...register('otherDetails')}
            name="otherDetails"
            placeholder="Anything else you want us to know?"
            rows={5}
            className="w-full p-4 text-lg font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
          ></textarea>
        </div>

        <div className="flex justify-start mt-6">
          <button
            disabled={loading}
            className={classNames(
              loading &&
                'animate-button-background bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 text-white',
              'text-lg font-semibold text-purple-900 bg-yellow-500 btn hover:bg-yellow-600'
            )}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </>
  );
};

export default RoommateForm;
