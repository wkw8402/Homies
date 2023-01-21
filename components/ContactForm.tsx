import axios from 'axios';
import classNames from 'classnames';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
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
      message: '',
    },
  });

  const name = watch('name');
  const onSubmit = async (data) => {
    setLoading(true);

    const res = await axios({
      method: 'POST',
      url: '/api/contact',
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
          <p>
            We can't wait to tell you all about the Homies pilot program and how
            you can get involved.
          </p>
          <p>We will be reaching out to you soon.</p>
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
        <h3 className="text-2xl font-bold text-purple-900">Get in touch</h3>
        <p className="text-purple-800 mt-0.5 text-opacity-90">
          Please fill out the form to learn more about the Homies pilot program.
          We will be in touch shortly.
        </p>
      </div>

      <form
        className="mt-8"
        name="contact-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor="name"
            className="ml-0.5 text-purple-900 font-medium text-lg"
          >
            Name *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: true })}
            name="name"
            placeholder="Your name"
            className="w-full p-4 text-lg font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
          />
          {errors.name && (
            <p className="text-sm text-red-500">Please enter your name</p>
          )}
        </div>

        <div className="mt-6">
          <label
            htmlFor="email"
            className="ml-0.5 text-purple-900 font-medium text-lg"
          >
            Email *
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
            placeholder="Your email address"
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
            Phone *
          </label>
          <input
            id="phone"
            type="text"
            {...register('phone', {
              required: true,
            })}
            name="phone"
            placeholder="Your phone number"
            className="w-full p-4 text-lg font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
          />
          {errors.phone && (
            <p className="text-sm text-red-500">
              Please enter your phone number
            </p>
          )}
        </div>

        <div className="mt-6">
          <label
            htmlFor="message"
            className="ml-0.5 text-purple-900 font-medium text-lg"
          >
            Message *
          </label>
          <textarea
            id="message"
            {...register('message', { required: true })}
            name="message"
            placeholder="Hi, I'd like to learn more about the Homies pilot program."
            rows={5}
            className="w-full p-4 text-lg font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-500">
              Please include more information with your request
            </p>
          )}
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
            {loading ? 'Sending...' : 'Send message'}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
