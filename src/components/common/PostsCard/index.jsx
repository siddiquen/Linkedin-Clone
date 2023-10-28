import React from 'react';
import "./index.scss";

export default function PostsCard({posts}) {
    return (
        <div className='postsCard'>
            <p className='timeStamp'>{posts.timeStamp}</p>
            <p className='status'>{posts.status}</p>
        </div>
    );
}