'use client'

import React from "react";
import PotentialRoommates from "./components/PotentialRoommates/PotentialRoomates";

export default function Dashboard(props) {
    return (
        <div id="Dashboard">
            <PotentialRoommates roommateCategories={props.roommateCategories} />
        </div>
    );
}
