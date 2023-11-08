import React from 'react';
import { BiLike} from "react-icons/bi";
import "./index.scss";

export default function LikeButton() {
    const handleLike = () => {
        
    };

    return (
        <div className='likeContainer'>
            <BiLike size ={25}/>
            <p>Likes</p>
        </div>
    )
}