'use client'

import React from "react";
import ProfileCard from "./ProfileCard";

const RoommateCategory = (props) => {
    const loadTitle = () => {
        if (props.titleType === "bold") {
            return (
                <h2 className="text-title font-bold ">{props.categoryTitle} {props.showNumRoommates && `(${props.numRoommates})`}</h2>
            )
        } else if (props.titleType === "normal") {
            return (
                <h2 className="text-title font-normal ">{props.categoryTitle} {props.showNumRoommates && `(${props.numRoommates})`}</h2>
            )
        } else if (props.titleType === "faded") {
            return (
                <h2 className="text-title font-bold opacity-[29%] ">{props.categoryTitle} {props.showNumRoommates && `(${props.numRoommates})`}</h2>
            )
        }
    }

    return (
        <div id="RoommateCategory" className="flex flex-row justify-between align-center w-full ">
            <div id="categoryDescription" className="text-wrap flex-column">
                {loadTitle()}
                <div className="text-center mt-6">{props.description}</div>
            </div>
            <div id="roommateList">
                <div className="flex flex-row gap-x-[2.625rem] py-[2.625rem]">
                    {props.roommatesList.map((roommate, index) => {
                        return (
                            <ProfileCard key={index} name={roommate.name} age={roommate.age} gender={roommate.gender} profileIcon={roommate.profileIcon} />
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default RoommateCategory