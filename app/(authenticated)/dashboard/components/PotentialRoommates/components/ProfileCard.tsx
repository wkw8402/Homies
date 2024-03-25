import React from "react";

interface ProfileCardProps {
    name: string;
    age: number;
    gender: string;
    profileIcon: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, age, gender, profileIcon }) => {
    return (
        <div id="profileCard" className="flex flex-col text-center py-3 gap-5">
            <div className="flex justify-center text-center">
                <div className="rounded-full bg-gray-200 text-[3.90625rem] leading-[6.25rem] w-[6.25rem] h-[6.25rem] ">
                    {profileIcon}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-[1.25rem] leading-7">{name}</p>
                <p className="opacity-50 text-base leading-6">{gender}, {age}</p>
            </div>
            <button className="w-[14.5rem] bg-black text-white p-3 rounded-lg hover:bg-gray-700 transition duration-300">
                View Profile
            </button>
        </div>
    );
};

export default ProfileCard;