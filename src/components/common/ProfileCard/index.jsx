import React from "react";
import ProfileEdit from "../ProfileEdit";
import "./index.scss";

export default function ProfileCard({currentUser, onEdit}) {

    return (
        <>
            {<div className="profile-card">
                <div className="edit-btn">
                    <button onClick={onEdit}>Edit</button>
                </div>
                <h3 className="userName">{currentUser.name}</h3>
                <p className="userEmail">{currentUser.email}</p>
            </div>}
        </>
    );
}