'use client'

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import AccountSettings from "./components/AccountSettings";

const settingsCategories = [
    "Account", "Profile", "Appearance", "Notifications", "Display"
]

export default function Settings(props) {
    const [selectedSettingsCategory, setSelectedSettingsCategory] = useState(settingsCategories[0])

    const getSelectedButtonClass = (category) => {
        if (category === selectedSettingsCategory) {
            return "text-left font-medium text-[#09090B] text-sm p-2 bg-[#F1F5F9]/50 w-full rounded-md text-sm"
        } else {
            return "text-left font-medium text-[#09090B] text-sm p-2 w-full rounded-md text-sm hover:bg-[#D9D9D9]/50 "
        }
    }

    return (
        <div id="Settings" className="p-10 grid grid-rows-settingsLayout grid-cols-settingsLayout h-screen gap-6">
            <div id="headings" className="flex flex-col col-span-2 border-b-2 gap-1.5 px-4 pb-6">
                <h1 className="font-semibold text-2xl leading-6 text-[#09090B]">Settings</h1>
                <div className="text-sm text-[#71717A]">Manage your account settings and set e-mail preferences</div>
            </div>
            <div id="navigation" className="flex flex-col gap-2">
                {settingsCategories.map((category, index) => {
                    return <button key={index} onClick={() => setSelectedSettingsCategory(category)} className={getSelectedButtonClass(category)}>{category}</button>
                })}
            </div>
            <div id="content">
                {selectedSettingsCategory === "Account" &&
                    <AccountSettings user={props.user} />
                }
            </div>
        </div>

    )
}
