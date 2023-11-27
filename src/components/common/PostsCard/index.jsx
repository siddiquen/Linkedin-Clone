import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LikeButton from '../LikeButton';
import {getCurrentUser, getAllUsers} from "../../../api/FirestoreAPIs";
import { HiOutlinePencil, HiTrash} from "react-icons/hi";
import "./index.scss";

export default function PostsCard({posts, id, getEditData}) {
    let navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    const [allUsers, setAllUsers] = useState([]);

    useMemo(() => {
        getCurrentUser(setCurrentUser);
        getAllUsers(setAllUsers);
    }, [])
   

    return (
        <div className='postsCard' key={id}>
            <div className='postImageWrapper'>
                <img alt="ProfileImage" className="PostImage" src={allUsers.filter((item) => item.id == posts.userId).map((item) => item.imageLink)[0]}/>
                <div>
                    <p 
                        className='name'
                        onClick ={() => 
                            navigate('/profile', {state: {id:posts?.userId, email:posts.userEmail}})
                        }
                    >
                        {posts.userName}
                    </p>
                    <p className='timeStamp'>{posts.timeStamp}</p>
                </div>
                <div className='actionContainer'>
                    <HiOutlinePencil size={30} className='actionIcon' onClick={() => getEditData(posts)}/>
                    <HiTrash size={30} className='actionIcon' />
                </div>
            </div>
            <p className='status'>{posts.status}</p>

            <LikeButton userId = {currentUser?.id} postId = {posts.id} currentUser={currentUser}/>
        </div>
    );
}