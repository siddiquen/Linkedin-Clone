import React, { useMemo, useState } from 'react';
import { BiLike, BiSolidLike} from "react-icons/bi";
import { getLikeByUser, likePost } from '../../../api/FirestoreAPIs';
import "./index.scss";

export default function LikeButton({userId, postId}) {
    const [likesCount, setLikesCount] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        likePost(userId, postId, liked)
    };

    useMemo (() => {
        getLikeByUser(userId, postId, setLiked, setLikesCount);
    }, [userId, postId])

    
    return (
        <div className='likeContainer' onClick={handleLike}>
            <p>{likesCount} like this post</p>
            <div>
                <hr/>
            </div>
            <div className='likes-inner'>
                {liked ? <BiSolidLike size ={25} /> : <BiLike size ={25} />} <p>like</p>
                
            </div>
            
        </div>
    )
}