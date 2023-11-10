import React, { useMemo, useState } from 'react';
import { BiLike} from "react-icons/bi";
import { getLikeByUser, likePost } from '../../../api/FirestoreAPIs';
import "./index.scss";

export default function LikeButton({userId, postId}) {
    const [likesCount, setLikesCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        likePost(userId, postId)
    };

    useMemo (() => {
        getLikeByUser(userId, postId);
    }, [userId, postId])

    return (
        <div className='likeContainer' onClick={handleLike}>
            <BiLike size ={25} />
            <p>Likes</p>
        </div>
    )
}