import React from "react";
import ProfileCard from "./common/ProfileCard/index.jsx";

export default function ProfileComponent({currentUser}) {
    return (
        <div>
            <ProfileCard currentUser = {currentUser} />
        </div>
    );
}