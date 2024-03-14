'use client'

import { useState } from "react";
import RoommateCategory from "./components/RoommateCategory"

const filters = [
    "All", "Requests", "Requested", "Not Interested"
]

const PotentialRoommates = (props) => {
    const [filter, setFilter] = useState("All");

    const chooseFilter = (filter) => {
        setFilter(filter);
        console.log(filter);
    }

    const getFilterButtonClassName = (buttonFilter) => {
        if (filter === buttonFilter) {
            return "bg-[#999999]/50 p-2 w-[7.5rem] rounded-md text-sm"
        } else {
            return "bg-[#D9D9D9]/50 p-2 w-[7.5rem] rounded-md text-sm hover:bg-[#999999]/50 transition duration-300"
        }
    }

    return (
        <div id="PotentialRoommates">
            <div id="potentialRoommatesFilter" className="flex flex-col gap-6 items-center justify-center text-center py-[3.75rem] px-[10.625rem]">
                <h2 className="text-title font-bold">Potential Roommates</h2>
                <div id="filters" className="flex flex-row gap-3">
                    {filters.map((filter, index) => {
                        return (
                            <button key={index} onClick={() => chooseFilter(filter)} className={getFilterButtonClassName(filter)}>{filter}</button>
                        )
                    })}
                </div>
            </div>

            <div className="flex flex-row justify-center w-full ml-auto mr-auto">
                <div className="w-[90%] flex flex-col items-center justify-center gap-[3.75rem] p-roommateCategory">
                    {props.roommateCategories.map((roommateCategory, index) => {
                        const { categoryType, categoryTitle, titleType, numRoommates, showNumRoommates, roommatesList, description } = roommateCategory;
                        if (categoryType === filter || filter === "All") {
                            return (
                                <div className="w-full" key={index}>
                                    <RoommateCategory categoryTitle={categoryTitle} titleType={titleType} numRoommates={numRoommates} showNumRoommates={showNumRoommates} roommatesList={roommatesList} description={description} />
                                </div>
                            )
                        }   
                    })}
                </div>
            </div>
        </div>
    )
}

export default PotentialRoommates;