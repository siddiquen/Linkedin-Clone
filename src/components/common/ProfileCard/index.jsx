import React, { useState, useMemo} from "react";
import PostsCard from "../PostsCard";
import { getSingleStatus, getSingleUser } from "../../../api/FirestoreAPIs";
import { useLocation } from "react-router-dom";
import "./index.scss";
import { HiOutlinePencil} from "react-icons/hi";

export default function ProfileCard({currentUser, onEdit}) {
    let location = useLocation();
    const [allStatuses, setAllStatuses] = useState([]);
    const [currentProfile, setCurrentProfile] = useState([]);
    useMemo(() => {
        if (location?.state?.id) {
            getSingleUser(setCurrentProfile, location?.state?.email);
            getSingleStatus(setAllStatuses, location?.state?.id);
        }
    }, []);

    return (
        <>
            <div className="profile-card">
                <div className="edit-btn">
                    <HiOutlinePencil className="edit-icon" onClick={onEdit}/>
                </div>
                <div className="profileInfo">
                    <div>
                        <h3 className="userName">{Object.values(currentProfile).length === 0 ? currentUser.name : currentProfile?.name}</h3>
                        <p className="heading">{Object.values(currentProfile).length === 0 ? currentUser.headline : currentProfile?.headline}</p>
                        <p className="city">
                            {Object.values(currentProfile).length === 0 ? `${currentUser.city}, ${currentUser.country}` : `${currentProfile?.city}, ${currentProfile?.country}`}
                        </p>
                        <a className="website" target = "_blank" href={Object.values(currentProfile).length === 0 ? currentUser.website : currentProfile?.website}>{Object.values(currentProfile).length === 0 ? currentUser.website : currentProfile?.website}</a>
                    </div>

                    <div className="rightInfo">
                        <p className="company">{Object.values(currentProfile).length === 0 ? currentUser.company : currentProfile?.company}</p>
                        <p className="university">{Object.values(currentProfile).length === 0 ? currentUser.university : currentProfile?.university}</p>
                    </div>
                </div>
                <p className="about">{Object.values(currentProfile).length === 0 ? currentUser.about : currentProfile?.about}</p>
                <p className="skills">
                    <span className="skills-label">Skills:</span> &nbsp;
                    {Object.values(currentProfile).length === 0 ? currentUser.skills : currentProfile?.skills}
                </p>

            </div>
            <div className="post-status-main">
                {allStatuses?.map((posts) => {
                    return (
                        <div key={posts.id}>
                            <PostsCard posts = {posts}/>
                        </div>
                    );
                })}
            </div>
            
        </>
    );
}