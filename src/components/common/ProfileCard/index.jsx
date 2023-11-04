import React, { useState, useMemo} from "react";
import PostsCard from "../PostsCard";
import { getSingleStatus, getSingleUser } from "../../../api/FirestoreAPIs";
import { useLocation } from "react-router-dom";
import "./index.scss";

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
                    <button onClick={onEdit}>Edit</button>
                </div>
                <div className="profileInfo">
                    <div>
                        <h3 className="userName">{Object.values(currentProfile).length === 0 ? currentUser.name : currentProfile?.name}</h3>
                        <p className="heading">{Object.values(currentProfile).length === 0 ? currentUser.headline : currentProfile?.headline}</p>
                        <p className="location">{Object.values(currentProfile).length === 0 ? currentUser.location : currentProfile?.location}</p>
                    </div>

                    <div className="rightInfo">
                        <p className="company">{Object.values(currentProfile).length === 0 ? currentUser.company : currentProfile?.company}</p>
                        <p className="university">{Object.values(currentProfile).length === 0 ? currentUser.university : currentProfile?.university}</p>
                    </div>
                </div>
                
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