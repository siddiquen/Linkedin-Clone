import React, { useState } from "react";
import ProfileEdit from "./common/ProfileEdit";
import ProfileCard from "./common/ProfileCard/index.jsx";

export default function ProfileComponent({currentUser}) {
    const [isEdit, setIsEdit] = useState(false);
    const onEdit = () => {
        setIsEdit(!isEdit);
    };
    return (
        <div>
            {isEdit ? (<ProfileEdit />) : (<ProfileCard currentUser = {currentUser} onEdit={onEdit}/>)}
        </div>
    );
}