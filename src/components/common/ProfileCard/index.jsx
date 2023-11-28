import React, { useState, useMemo} from "react";
import PostsCard from "../PostsCard";
import { getSingleStatus, getSingleUser} from "../../../api/FirestoreAPIs";
import { useLocation } from "react-router-dom";
import FileUploadModal from "../FileUploadModal";
import { HiOutlinePencil} from "react-icons/hi";
import { uploadImage as uploadImageAPI } from "../../../api/ImageUpload";
import "./index.scss";

export default function ProfileCard({currentUser, onEdit}) {
    let location = useLocation();
    const [allStatuses, setAllStatuses] = useState([]);
    const [currentProfile, setCurrentProfile] = useState([]);
    const [currentImage, setCurrentImage] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [progress, setProgress] = useState(0);

    useMemo(() => {
        if (location?.state?.id) {
            getSingleUser(setCurrentProfile, location?.state?.email);
            getSingleStatus(setAllStatuses, location?.state?.id);
        }
    }, []);

    const getImage = (event) => {
        setCurrentImage(event.target.files[0]);
    };

    const uploadImage = () => {
        uploadImageAPI(currentImage, currentUser.id, setModalOpen, setProgress, setCurrentImage);
    };

    return (
        <>
            <FileUploadModal modalOpen={modalOpen} setModalOpen={setModalOpen} getImage={getImage} uploadImage={uploadImage} currentImage={currentImage} progress={progress}/>
            <div className="profile-card">
                <div className="edit-btn">
                    {currentUser?.id === currentProfile?.id ? (<>
                        <HiOutlinePencil className="edit-icon" onClick={onEdit}/></>
                    ) : (<></>)}
                    
                </div>
                <div className="profileInfo">
                    <div>
                        <img className="profileImage" src ={Object.values(currentProfile).length === 0 ? currentUser.imageLink : currentProfile?.imageLink} alt="profile image" onClick={() => setModalOpen(true)}/>
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