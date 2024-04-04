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
 interests: string[] | null;
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
     interests: profile?.interests,
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
   console.log("profile: ")
   console.log(profile);
 }, [])

 const onSubmit: SubmitHandler<ProfileFormValues> = async (data) => {
   try {
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
   }
   catch (error){
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
         <p className="mb-1 text-left text-gray-600 font-bold">Desired Location :</p>
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
       <p className="mb-1 text-left text-gray-600 font-bold">About yourself :</p>
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
         <p className="mb-1 text-left text-gray-600 font-bold">Things you like to do:</p>
         <div className="flex flex-wrap gap-4">
           <label className="inline-flex items-center">
             <input
               type="checkbox"
               value="reading"
               className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               {...register('interests', { required: 'This field is required' })}
             />
             <span className="ml-2 text-gray-700">Reading</span>
           </label>
           <label className="inline-flex items-center">
             <input
               type="checkbox"
               value="exercising"
               className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               {...register('interests', { required: 'This field is required' })}
             />
             <span className="ml-2 text-gray-700">Exercising</span>
           </label>
           <label className="inline-flex items-center">
             <input
               type="checkbox"
               value="gaming"
               className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               {...register('interests', { required: 'This field is required' })}
             />
             <span className="ml-2 text-gray-700">Gaming</span>
           </label>
                     <label className="inline-flex items-center">
             <input
               type="checkbox"
               value="cooking"
               className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               {...register('interests', { required: 'This field is required' })}
             />
             <span className="ml-2 text-gray-700">Cooking</span>
           </label>            <label className="inline-flex items-center">
             <input
               type="checkbox"
               value="watching_tv"
               className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               {...register('interests', { required: 'This field is required' })}
             />
             <span className="ml-2 text-gray-700">Watching TV</span>
           </label>
           <label className="inline-flex items-center">
             <input
               type="checkbox"
               value="listening_to_music"
               className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               {...register('interests', { required: 'This field is required' })}
             />
             <span className="ml-2 text-gray-700">Listening to Music</span>
           </label>
           <label className="inline-flex items-center">
             <input
               type="checkbox"
               value="playing_music"
               className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               {...register('interests', { required: 'This field is required' })}
             />
             <span className="ml-2 text-gray-700">Playing Music</span>
           </label>
           <label className="inline-flex items-center">
             <input
               type="checkbox"
               value="sports"
               className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               {...register('interests', { required: 'This field is required' })}
             />
             <span className="ml-2 text-gray-700">Sports</span>
           </label>
           <label className="inline-flex items-center">
             <input
               type="checkbox"
               value="traveling"
               className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               {...register('interests', { required: 'This field is required' })}
             />
             <span className="ml-2 text-gray-700">Traveling</span>
           </label>
           <label className="inline-flex items-center">
             <input
               type="checkbox"
               value="shopping"
               className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               {...register('interests', { required: 'This field is required' })}
             />
             <span className="ml-2 text-gray-700">Shopping</span>
           </label>
           <label className="inline-flex items-center">
             <input
               type="checkbox"
               value="volunteering"
               className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               {...register('interests', { required: 'This field is required' })}
             />
             <span className="ml-2 text-gray-700">Volunteering</span>
           </label>
           <label className="inline-flex items-center">
             <input
               type="checkbox"
               value="socializing"
               className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               {...register('interests', { required: 'This field is required' })}
             />
             <span className="ml-2 text-gray-700">Socializing</span>
           </label>
           <label className="inline-flex items-center">
             <input
               type="checkbox"
               value="other"
               className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
               {...register('interests', { required: 'This field is required' })}
             />
             <span className="ml-2 text-gray-700">Other...</span>
           </label>
         </div>
         {errors.interests && (
           <p className="text-red-500">At least one option must be selected</p>
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
       <p className="mb-1 text-left text-gray-600 font-bold">Do you smoke?</p>
         <select
           className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
           {...register('smoking', { required: 'This field is required' })}
         >
           <option value="select">Select</option>
           <option value="yes">Yes</option>
           <option value="no">No</option>
           <option value="Sometimes">Sometimes</option>
         </select>
         {errors.smoking && (
           <p className="text-red-500"> This field is required </p>
         )}
       </label>


       <label className="block mb-5">
       <p className="mb-1 text-left text-gray-600 font-bold">Do you drink alcohol? :</p>
         <select
           className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
           {...register('alcohol', { required: 'This field is required' })}
         >
           <option value="select">Select</option>
           <option value="yes">Yes</option>
           <option value="no">No</option>
         </select>
         {errors.alcohol && (
           <p className="text-red-500"> This field is required </p>
         )}
       </label>


       <label className="block mb-5">
       <p className="mb-1 text-left text-gray-600 font-bold">Do you have any pets?</p>
         <select
           className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
           {...register('hasPets', { required: 'This field is required' })}
         >
           <option value="select">Select</option>
           <option value="yes">Yes</option>
           <option value="no">No</option>
         </select>
         {errors.hasPets && (
           <p className="text-red-500"> This field is required </p>
         )}
       </label>


       <label className="block mb-5">
       <p className="mb-1 text-left text-gray-600 font-bold">If so, describe what your pet is like :</p>
         <input
           className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
           {...register('petsDescription', { required: true })}
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
       <p className="mb-1 text-left text-gray-600 font-bold">Are you okay living with someone who has a pet?</p>
         <select
           className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
           {...register('likesPets', { required: 'This field is required' })}
         >
           <option value="select">Select</option>
           <option value="yes">Yes</option>
           <option value="no">No</option>
         </select>
         {errors.likesPets && (
           <p className="text-red-500"> This field is required </p>
         )}
       </label>

       <label className="block mb-5">
       <p className="mb-1 text-left text-gray-600 font-bold">How do you usually handle conflict or issues with roommates?</p>
         <select
           className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
           {...register('roommateConflict', { required: 'This field is required' })}
         >
           <option value="select">Select</option>
           <option value="discuss">Discuss the issue directly but respectfully</option>
           <option value="avoid">Avoid confrontation, keep it to myself</option>
           <option value="mediator">Seek help from a mediator or third-party intervention</option>
         </select>
         {errors.roommateConflict && (
           <p className="text-red-500"> This field is required </p>
         )}
       </label>

       <label className="block mb-5">
       <p className="mb-1 text-left text-gray-600 font-bold">How often do you do cleaning?</p>
         <select
           className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
           {...register('cleaning', { required: 'This field is required' })}
         >
           <option value="select">Select</option>
           <option value="daily">Daily</option>
           <option value="weekly">Weekly</option>
           <option value="monthly">Monthly</option>
           <option value="sometimes">Every once in awhile</option>
           <option value="none">I don't clean</option>
         </select>
         {errors.cleaning && (
           <p className="text-red-500"> This field is required </p>
         )}
       </label>


       <label className="block mb-5">
       <p className="mb-1 text-left text-gray-600 font-bold">Sleep schedule :</p>
         <select
           className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
           {...register('sleepSchedule', {
             required: 'This field is required',
           })}
         >
           <option value="select">Select</option>
           <option value="earlyBird">Early bird (awake early, sleep early)</option>
           <option value="nightOwl">Night owl (awake late, sleep late)</option>
           <option value="mixed">Mixed (varies daily)</option>
         </select>
         {errors.sleepSchedule && (
           <p className="text-red-500"> This field is required </p>
         )}
       </label>


       <label className="block mb-5">
       <p className="mb-1 text-left text-gray-600 font-bold">Do you enjoy hosting gatherings or parties?</p>
         <select
           className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
           {...register('likesParties', {
             required: 'This field is required',
           })}
         >
           <option value="select">Select</option>
           <option value="Yes">Yes</option>
           <option value="No">No</option>
         </select>
         {errors.likesParties && (
           <p className="text-red-500"> This field is required </p>
         )}
       </label>


       <label className="block mb-5">
       <p className="mb-1 text-left text-gray-600 font-bold">What's your preferred method of communication for important matters?</p>
         <select
           className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
           {...register('communicationMethod', {
             required: 'This field is required',
           })}
         >
           <option value="select">Select</option>
           <option value="faceToFace">Discuss face to face</option>
           <option value="phoneCall">Talk on the phone</option>
           <option value="textEmail">Text message or email</option>
         </select>
         {errors.communicationMethod && (
           <p className="text-red-500"> This field is required </p>
         )}
       </label>


       <label className="block mb-5">
       <p className="mb-1 text-left text-gray-600 font-bold">Gender Preference (optional)</p>
          <div className="flex flex-wrap gap-4">
           <label className='mr-10'>
             <input
               type="checkbox"
               name="roommateGender"
               value="male"
               {...(register('likesParties', {
                 required: 'This field is required',
               }) as any)}
               className="mr-2"
             />
             Male
           </label>
           <label className='mr-10'>
             <input
               type="checkbox"
               name="roommateGender"
               value="female"
               {...(register('roommateGender', {
                 required: 'This field is required',
               }) as any)}
               className="mr-2"
             />
             Female
           </label>
           <label>
             <input
               type="checkbox"
               name="roommateGender"
               value="transgender-male"
               {...(register('roommateGender', {
                 required: 'This field is required',
               }) as any)}
               className="mr-2"
             />
             Transgender Male
           </label>
           <label>
             <input
               type="checkbox"
               name="roommateGender"
               value="transgender-female"
               {...(register('roommateGender', {
                 required: 'This field is required',
               }) as any)}
               className="mr-2"
             />
             Transgender Female
           </label>
           <label>
             <input
               type="checkbox"
               name="roommateGender"
               value="non-binary"
               {...(register('roommateGender', {
                 required: 'This field is required',
               }) as any)}
               className="mr-2"
             />
             Non-binary
           </label>
           <label>
             <input
               type="checkbox"
               name="roommateGender"
               value="no-preference"
               {...(register('roommateGender', {
                 required: 'This field is required',
               }) as any)}
               className="mr-2"
             />
             No-preference
           </label>
         </div>
         {errors.roommateGender && (
           <p className="text-red-500"> This field is required </p>
         )}
       </label>
       <label className="block mb-5">
       <p className="mb-1 text-left text-gray-600 font-bold">Roommate sharing :</p>
         <select
           className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
           {...register('roommateSharing', {
             required: 'This field is required',
           })}
         >
           <option value="select">select</option>
           <option value="yesSharing">Yes, I don't mind sharing</option>
           <option value="someSharing">Some things, but not all</option>
           <option value="noSharing">I prefer to keep my things separate</option>
         </select>
         {errors.roommateSharing && (
           <p className="text-red-500"> This field is required </p>
         )}
       </label>


       <label className="block mb-5">
       <p className="mb-1 text-left text-gray-600 font-bold">How do you feel about guests?</p>
         <select
           className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
           {...register('roommateGuests', {
             required: 'This field is required',
           })}
         >
           <option value="select">select</option>
           <option value="merrier">The more the merrier</option>
           <option value="occasional">Occasional guests are fine</option>
           <option value="noGuests">Prefer no guests</option>
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
