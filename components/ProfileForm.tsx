'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const ProfileForm = ({ session, profile }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      name: profile?.name,
      location: profile?.location,
      bio: profile?.bio,
    },
  });

  useEffect(() => {
    setValue('name', session?.user?.name);
  }, [session]);

  const onSubmit = async (data) => {
    setLoading(true);

    const res = await axios({
      method: 'POST',
      url: '/api/profile',
      data: data,
    })
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        reset(data);
      })
      .catch((e) => {
        alert("Oops, an error occurred. That's our fault.");
        console.error(e);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-5">
          <input
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('name', { required: true })}
            id="name"
            name="name"
            autoComplete="given-name"
            type="text"
            placeholder="First name"
          />
          {errors.name && (
            <p className="text-red-500">This field is required</p>
          )}
        </label>

        <label className="block mb-5">
          <input
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('location', { required: true })}
            id="location"
            name="location"
            type="text"
            placeholder="Desired Location (ex: Los Angeles, CA)"
          />
          {errors.location && (
            <p className="text-red-500">This field is required</p>
          )}
        </label>

        <label className="block mb-5">
          <textarea
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('bio', { required: true })}
            id="bio"
            rows={6}
            name="bio"
            placeholder="Enter a little about yourself..."
          />
          {errors.bio && <p className="text-red-500">This field is required</p>}
        </label>

        {/* <label className="block mb-5">
          <input
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone number"
          />
        </label> */}

        <button
          className="w-full py-4 mb-8 font-semibold text-white transition duration-200 ease-in-out bg-indigo-600 border border-indigo-700 disabled:opacity-50 px-9 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 hover:bg-indigo-700"
          type="submit"
          disabled={loading || !isDirty}
        >
          {loading ? 'Saving...' : 'Save Profile'}
        </button>
      </form>
    </>
  );
};

export default ProfileForm;
