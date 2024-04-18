'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from "react";

type AccountSettingsFormValues = {
    name: string | null;
    email: string | null;
    phone: string | null;
    gender: string | null;
    regionalCenter: string | null;
    emergencyContacts: string[] | null
};

const testEmergencyContacts = [
    "Emergency Contact 1",
    "Emergency Contact 2",
    "Emergency Contact 3"
]

const testNumEmergencyContacts = 3;


const AccountSettings = (props) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const user = props.user;

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
        watch,
        setValue,
        reset,
    } = useForm<AccountSettingsFormValues>({
        defaultValues: {
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
            gender: user?.gender,
            regionalCenter: user?.regionalCenter,
            emergencyContacts: []
        },
    });

    const onSubmit: SubmitHandler<AccountSettingsFormValues> = async (data) => {
        try {
            setLoading(true);

            // insert database update here
            setTimeout(() => {
                console.log("delay")
            }, 1000);

            setLoading(false);
            setSuccess(true);
            console.log(data);
            reset(data);

        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setValue("gender", user.gender);
    }, [])

    return (
        <div id="accountSettings" className="flex flex-col gap-8 overflow-auto pb-6">
            <div id="title" className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <h2 className="font-medium text-base leading-5 text-[#020617]">Account</h2>
                    <div className="text-sm text-[#71717A]">Update your account settings. Set your preferred language and timezone.</div>
                </div>
                <hr></hr>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                <div id="options" className="flex flex-col gap-8">
                    <div id="nameSetting" >
                        <label className="flex flex-col gap-1.5">
                            <p>Name</p>
                            <input
                                className="px-4 py-2 w-full text-sm text-[#64748B] font-normal placeholder-gray-500 bg-white outline-none border border-[#E2E8F0] rounded-lg focus:ring focus:ring-indigo-300"
                                {...register("name", { required: true })}
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                            />
                            {errors.name && (
                                <p className="text-red-500">This field is required</p>
                            )}
                            <div className="text-xs leading-5 text-[#64748B]">This is the name that will be displayed on your profile and in emails</div>
                        </label>
                    </div>
                    <div id="emailSetting" >
                        <label className="flex flex-col gap-1.5">
                            <p>Email</p>
                            <input
                                className="px-4 py-2 w-full text-sm text-[#64748B] font-normal placeholder-gray-500 bg-white outline-none border border-[#E2E8F0] rounded-lg focus:ring focus:ring-indigo-300"
                                {...register("email", { required: true })}
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Your email"
                            />
                            {errors.name && (
                                <p className="text-red-500">This field is required</p>
                            )}
                            <div className="text-xs leading-5 text-[#64748B]">Your email</div>
                        </label>
                    </div>
                    <div id="phoneSetting" >
                        <label className="flex flex-col gap-1.5">
                            <p>Phone Number</p>
                            <input
                                className="px-4 py-2 w-full text-sm text-[#64748B] font-normal placeholder-gray-500 bg-white outline-none border border-[#E2E8F0] rounded-lg focus:ring focus:ring-indigo-300"
                                {...register("phone", { required: true })}
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="Your phone number"
                            />
                            {errors.name && (
                                <p className="text-red-500">This field is required</p>
                            )}
                            <div className="text-xs leading-5 text-[#64748B]">Your phone number</div>
                        </label>
                    </div>
                    <div id="genderSetting" >
                        <label className="flex flex-col gap-1.5">
                            <p>Gender</p>
                            <div className="flex flex-wrap gap-4">
                                <label className='mr-10'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        {...(register('gender', {
                                            required: 'This field is required',
                                        }) as any)}
                                        className="mr-2"
                                    />
                                    Male
                                </label>
                                <label className='mr-10'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        {...(register('gender', {
                                            required: 'This field is required',
                                        }) as any)}
                                        className="mr-2"
                                    />
                                    Female
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="transgender-male"
                                        {...(register('gender', {
                                            required: 'This field is required',
                                        }) as any)}
                                        className="mr-2"
                                    />
                                    Transgender Male
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="transgender-female"
                                        {...(register('gender', {
                                            required: 'This field is required',
                                        }) as any)}
                                        className="mr-2"
                                    />
                                    Transgender Female
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="non-binary"
                                        {...(register('gender', {
                                            required: 'This field is required',
                                        }) as any)}
                                        className="mr-2"
                                    />
                                    Non-binary
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="private"
                                        value="private"
                                        {...(register('gender', {
                                            required: 'This field is required',
                                        }) as any)}
                                        className="mr-2"
                                    />
                                    Prefer not to say
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="other"
                                        {...(register('gender', {
                                            required: 'This field is required',
                                        }) as any)}
                                        className="mr-2"
                                    />
                                    Other...
                                </label>
                            </div>
                            {errors.gender && (
                                <p className="text-red-500"> This field is required </p>
                            )}
                            <div className="text-xs leading-5 text-[#64748B]">Your gender</div>
                        </label>
                    </div>
                    <div id="regionalCenterSetting" >
                        <label className="flex flex-col gap-1.5">
                            <p>Regional Center</p>
                            <select
                                className="px-4 py-2 w-full text-sm text-[#64748B] font-normal placeholder-gray-500 bg-white outline-none border border-[#E2E8F0] rounded-lg focus:ring focus:ring-indigo-300"
                                {...register('regionalCenter', { required: 'This field is required' })}
                            >
                                <option value="Alta California Regional Center">Alta California Regional Center</option>
                                <option value="Central Valley Regional Center">Central Valley Regional Center</option>
                                <option value="Eastern Los Angeles Regional Center">Eastern Los Angeles Regional Center</option>
                                <option value="Far Northern Regional Center">Far Northern Regional Center</option>
                                <option value="Golden Gate Regional Center">Golden Gate Regional Center</option>
                                <option value="Harbor Regional Center">Harbor Regional Center</option>
                                <option value="Lanterman Regional Center">Lanterman Regional Center</option>
                                <option value="North Bay Regional Center">North Bay Regional Center</option>
                                <option value="North Los Angeles County Regional Center">North Los Angeles County Regional Center</option>
                                <option value="Orange County Regional Center">Orange County Regional Center</option>
                                <option value="Redwood Coast Regional Center">Redwood Coast Regional Center</option>
                                <option value="Regional Center of the East Bay">Regional Center of the East Bay</option>
                                <option value="San Andreas Regional Center">San Andreas Regional Center</option>
                                <option value="San Diego Regional Center">San Diego Regional Center</option>
                                <option value="San Gabriel/Pomona Regional Center">San Gabriel/Pomona Regional Center</option>
                                <option value="South Central Los Angeles Regional Center">South Central Los Angeles Regional Center</option>
                                <option value="Tri-Counties Regional Center">Tri-Counties Regional Center</option>
                                <option value="Valley Mountain Regional Center">Valley Mountain Regional Center</option>
                                <option value="Westside Regional Center">Westside Regional Center</option>
                                <option value="unknown">Not sure</option>
                                <option value="other">Other...</option>

                            </select>
                            {errors.regionalCenter && (
                                <p className="text-red-500"> This field is required </p>
                            )}
                            <div className="text-xs leading-5 text-[#64748B]">Your Regional Center</div>
                        </label>
                    </div>
                    <div id="emergencyContactsSetting" >
                        <label className="flex flex-col gap-1.5">
                            <p>Emergency Contacts</p>
                            {testEmergencyContacts.map((contact, index) => {
                                return (
                                    <input
                                        key={index}
                                        className="px-4 py-2 w-full text-sm text-[#64748B] font-normal placeholder-gray-500 bg-white outline-none border border-[#E2E8F0] rounded-lg focus:ring focus:ring-indigo-300"
                                        {...register("emergencyContacts")}
                                        id={`emergencyContact-${index}`}
                                        name={`emergencyContact-${index}`}
                                        type="text"
                                        placeholder={`Emergency Contact ${index}`}
                                    />
                                )
                            })}
                        </label>
                    </div>
                </div>

                <button
                    className="w-[139px] py-2 px-4 font-medium text-white text-sm rounded-md leading-6 transition duration-200 ease-in-out bg-[#0F172A] cursor-pointer hover:bg-[#142140]"
                    type="submit"
                    disabled={loading || !isDirty}
                >
                    {loading ? 'Saving...' : 'Update Account'}
                </button>
            </form>

        </div>
    )
}

export default AccountSettings;