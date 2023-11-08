import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LikeButton from '../LikeButton';
import {getCurrentUser} from "../../../api/FirestoreAPIs";
import "./index.scss";

export default function PostsCard({posts, id}) {
    let navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});

    useMemo(() => {
        getCurrentUser(setCurrentUser)
    }, [])

    return (
        <div className='postsCard' key={id}>
            <p 
                className='name'
                onClick ={() => 
                    navigate('/profile', {state: {id:posts?.userId, email:posts.userEmail}})
                }
            >
                {posts.userName}
            </p>
            <p className='timeStamp'>{posts.timeStamp}</p>
            <p className='status'>{posts.status}</p>

            <LikeButton userId = {currentUser?.id} postId = {posts.id}/>
        </div>
    );
}