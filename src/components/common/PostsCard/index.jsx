import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.scss";

export default function PostsCard({posts, id}) {
    let navigate = useNavigate();
    console.log(posts.userEmail);
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
        </div>
    );
}