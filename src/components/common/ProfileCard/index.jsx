import React, { useState, useMemo} from "react";
import PostsCard from "../PostsCard";
import { getSingleStatus, getSingleUser } from "../../../api/FirestoreAPIs";
import { useLocation } from "react-router-dom";
import "./index.scss";

export default function ProfileCard({currentUser, onEdit}) {
    let location = useLocation();
    const [allStatuses, setAllStatus] = useState([]);
    const [currentProfile, setCurrentProfile] = useState({});
    useMemo(() => {
        if (location?.state?.id) {
            getSingleStatus(setAllStatus, location?.state?.id);
        }

        if (location?.state?.email) {
            getSingleUser(setCurrentProfile, location?.state?.email);
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
                        <h3 className="userName">{currentUser.name}</h3>
                        <p className="heading">{currentUser.headline}</p>
                        <p className="location">{currentUser.location}</p>
                    </div>

                    <div className="rightInfo">
                        <p className="company">{currentUser.company}</p>
                        <p className="university">{currentUser.university}</p>
                    </div>
                </div>
                
            </div>
            <div className="post-status-main">
                {allStatuses.filter((item) => {
                    return item.userEmail === localStorage.getItem("userEmail");
                }).map((posts) => {
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