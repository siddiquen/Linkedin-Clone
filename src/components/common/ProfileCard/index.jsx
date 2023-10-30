import React from "react";
import "./index.scss";

export default function ProfileCard({currentUser}) {
    return <div className="proffile-card"><h3>{currentUser.name}</h3></div>
}