'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Profile } from '@prisma/client';

type ProfileFormValues = {
  name: string | null;
  location: string | null;
  bio: string | null;
  smoking: string | null;
  interests: string[] | string | null; // Todo: this is a crime against typescript that ought to be remedied at some point
  interestsOther: string | null;
  alcohol: string | null;
  hasPets: string | null;
  petsDescription: string | null;
  likesPets: string | null;
  roommateConflict: string | null;
  cleaning: string | null;
  sleepSchedule: string | null;
  likesParties: string | null;
  communicationMethod: string | null;
  roommateGender: string[] | null;
  roommateSharing: string | null;
  roommateGuests: string | null;
};

const ProfileForm = ({
  session,
  profile,
}: {
  session: any;
  profile: Profile;
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
    setValue,
    reset,
  } = useForm<ProfileFormValues>({
    defaultValues: {
      name: profile?.name,
      location: profile?.location,
      bio: profile?.bio,
      smoking: profile?.smoking,
      interests: profile?.interests.join(','),
      interestsOther: profile?.interestsOther,
      alcohol: profile?.alcohol,
      hasPets: profile?.hasPets,
      petsDescription: profile?.petsDescription,
      likesPets: profile?.likesPets,
      roommateConflict: profile?.roommateConflict,
      cleaning: profile?.cleaning,
      sleepSchedule: profile?.sleepSchedule,
      likesParties: profile?.likesParties,
      communicationMethod: profile?.communicationMethod,
      roommateGender: profile?.roommateGender,
      roommateSharing: profile?.roommateSharing,
      roommateGuests: profile?.roommateGuests,
    },
  });

  useEffect(() => {
    setValue('name', session?.user?.name);
  }, [session]);

  useEffect(() => {
    console.log('profile: ');
    console.log(profile);
  }, []);

  const onSubmit: SubmitHandler<ProfileFormValues> = async (data) => {
    try {
      setLoading(true);
      console.log(data);

      // Convert interests to an array of strings
      data.interests =
        typeof data.interests == 'string' ? data.interests.split(',') : [];

      const res = await axios.put(`/api/profile/${profile.id}`, data);
      setLoading(false);
      setSuccess(true);
      reset(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">Name :</p>
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
          <p className="mb-1 text-left text-gray-600 font-bold">
            Desired Location :
          </p>
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
          <p className="mb-1 text-left text-gray-600 font-bold">
            About yourself :
          </p>
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

        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            Things you like to do (comma separated list):
          </p>
          <input
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('interests', { required: true })}
            id="interests"
            name="interests"
            type="text"
            placeholder="(ex: listening to music, sleep)"
          />
          {errors.location && (
            <p className="text-red-500">This field is required</p>
          )}
        </label>

        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">Interests :</p>
          <input
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('interestsOther', { required: true })}
            id="interestsOther"
            name="interestsOther"
            type="text"
            placeholder="Any other interests you want to add on?"
          />
          {errors.interestsOther && (
            <p className="text-red-500">This field is required</p>
          )}
        </label>
        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            Do you smoke? :
          </p>
          <select
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('smoking', { required: 'This field is required' })}
          >
            <option value="select">select</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
          {errors.smoking && (
            <p className="text-red-500"> This field is required </p>
          )}
        </label>

        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            Do you drink alcohol? :
          </p>
          <select
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('alcohol', { required: 'This field is required' })}
          >
            <option value="select">select</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
          {errors.alcohol && (
            <p className="text-red-500"> This field is required </p>
          )}
        </label>

        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            Do you have pets?:
          </p>
          <select
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('hasPets', { required: 'This field is required' })}
          >
            <option value="select">select</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
          {errors.hasPets && (
            <p className="text-red-500"> This field is required </p>
          )}
        </label>

        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            If so, describe what your pet is like :
          </p>
          <input
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('petsDescription', { required: false })}
            id="petsDescription"
            name="petsDescription"
            type="text"
            placeholder="my pet is like ..."
          />
          {errors.petsDescription && (
            <p className="text-red-500">This field is required</p>
          )}
        </label>

        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            Do you like pets :
          </p>
          <select
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('likesPets', { required: 'This field is required' })}
          >
            <option value="select">select</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
          {errors.likesPets && (
            <p className="text-red-500"> This field is required </p>
          )}
        </label>

        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            Roommate Conflict :
          </p>
          <div>
            <label className="mr-10">
              <input
                type="radio"
                name="roommateConflict"
                value="discuss"
                {...(register('roommateConflict', {
                  required: 'This field is required',
                }) as any)}
                className="mr-2"
              />
              discuss
            </label>

            <label className="mr-10">
              <input
                type="radio"
                name="roommateConflict"
                value="avoid"
                {...(register('roommateConflict', {
                  required: 'This field is required',
                }) as any)}
                className="mr-2"
              />
              avoid
            </label>
            <label>
              <input
                type="radio"
                name="roommateConflict"
                value="mediator"
                {...(register('roommateConflict', {
                  required: 'This field is required',
                }) as any)}
                className="mr-2"
              />
              mediator
            </label>
          </div>
          {errors.roommateConflict && (
            <p className="text-red-500"> This field is required </p>
          )}
        </label>

        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            How often do you do cleaning?
          </p>
          <select
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('cleaning', { required: 'This field is required' })}
          >
            <option value="select">select</option>
            <option value="sometimes">sometimes</option>
            <option value="weekly">daily</option>
            <option value="monthly">monthly</option>
          </select>
          {errors.cleaning && (
            <p className="text-red-500"> This field is required </p>
          )}
        </label>

        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            Sleep schedule :
          </p>
          <select
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('sleepSchedule', {
              required: 'This field is required',
            })}
          >
            <option value="select">select</option>
            <option value="earlyBird">earlyBird</option>
            <option value="nightOwl">nightOwl</option>
            <option value="mixed">mixed</option>
          </select>
          {errors.sleepSchedule && (
            <p className="text-red-500"> This field is required </p>
          )}
        </label>

        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            Do you like party?
          </p>
          <select
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('likesParties', {
              required: 'This field is required',
            })}
          >
            <option value="select">select</option>
            <option value="Yes">Yes</option>
            <option value="Sometimes">Sometimes</option>
            <option value="No">No</option>
          </select>
          {errors.likesParties && (
            <p className="text-red-500"> This field is required </p>
          )}
        </label>

        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            What communication method do you prefer?
          </p>
          <select
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('communicationMethod', {
              required: 'This field is required',
            })}
          >
            <option value="select">select</option>
            <option value="phoneCall">Phonecall</option>
            <option value="faceToFace">nightOwl</option>
            <option value="textEmail">mixed</option>
          </select>
          {errors.communicationMethod && (
            <p className="text-red-500"> This field is required </p>
          )}
        </label>

        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            Roommate gender :
          </p>
          <div>
            <label className="mr-5">
              <input
                type="checkbox"
                name="roommateGender"
                value="male"
                {...(register('roommateGender', {
                  required: 'This field is required',
                }) as any)}
                className="mr-2"
              />
              male
            </label>
            <label className="mr-5">
              <input
                type="checkbox"
                name="roommateGender"
                value="female"
                {...(register('roommateGender', {
                  required: 'This field is required',
                }) as any)}
                className="mr-2"
              />
              female
            </label>
            <label className="mr-5">
              <input
                type="checkbox"
                name="roommateGender"
                value="non-binary"
                {...(register('roommateGender', {
                  required: 'This field is required',
                }) as any)}
                className="mr-2"
              />
              non-binary
            </label>
            <label className="mr-5">
              <input
                type="checkbox"
                name="roommateGender"
                value="transgender-male"
                {...(register('roommateGender', {
                  required: 'This field is required',
                }) as any)}
                className="mr-2"
              />
              transgender-male
            </label>
            <label className="mr-5">
              <input
                type="checkbox"
                name="roommateGender"
                value="transgender-female"
                {...(register('roommateGender', {
                  required: 'This field is required',
                }) as any)}
                className="mr-2"
              />
              transgender-female
            </label>
            <label>
              <input
                type="checkbox"
                name="roommateGender"
                value="other"
                {...(register('roommateGender', {
                  required: 'This field is required',
                }) as any)}
                className="mr-2"
              />
              other
            </label>
          </div>
          {errors.roommateGender && (
            <p className="text-red-500"> This field is required </p>
          )}
        </label>
        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            Roommate sharing :
          </p>
          <select
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('roommateSharing', {
              required: 'This field is required',
            })}
          >
            <option value="select">select</option>
            <option value="noSharing">no Sharing</option>
            <option value="someSharing">some Sharing</option>
            <option value="yesSharing">yes Sharing</option>
          </select>
          {errors.roommateSharing && (
            <p className="text-red-500"> This field is required </p>
          )}
        </label>

        <label className="block mb-5">
          <p className="mb-1 text-left text-gray-600 font-bold">
            Roommate guest :
          </p>
          <select
            className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            {...register('roommateGuests', {
              required: 'This field is required',
            })}
          >
            <option value="select">select</option>
            <option value="occasional">no Sharing</option>
            <option value="noGuests">no Guests</option>
            <option value="merrier">merrier</option>
          </select>
          {errors.roommateGuests && (
            <p className="text-red-500"> This field is required </p>
          )}
        </label>

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
