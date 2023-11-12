import React, { useMemo, useState } from 'react';
import { BiLike, BiSolidLike, BiComment, BiSolidComment} from "react-icons/bi";
import { getLikeByUser, likePost, postComment, getComments } from '../../../api/FirestoreAPIs';
import "./index.scss";
import {getCurrentTimeStamp} from "../../../helpers/useMoment.jsx";

export default function LikeButton({userId, postId}) {
    const [likesCount, setLikesCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleLike = () => {
        likePost(userId, postId, liked)
    };

    useMemo (() => {
        getLikeByUser(userId, postId, setLiked, setLikesCount);
        getComments(postId, setComments);
    }, [userId, postId])

    const getComment = (event) => {
        setComment(event.target.value);
    }

    const addComment = () => {
        postComment(postId, comment, getCurrentTimeStamp('LLL'));
        setComment('');
    }

    return (
        <div className='likeContainer' >
            <p>{likesCount} like this post</p>
            <div>
                <hr/>
            </div>
            <div className='likes-comment'>
                <div className='likes-inner' onClick={handleLike}>
                    {liked ? <BiSolidLike size ={25} /> : <BiLike size ={25} />} <p>like</p>
                </div>
                <div className='comment-inner' onClick={() => setShowCommentBox(true)}>
                    {showCommentBox ? <BiSolidComment size ={25}/> : <BiComment size ={25} />} <p>comment</p>
                </div>
            </div>
            {showCommentBox? (<>
                <input className='common-input' name='comment' placeholder='Add a Comment' onChange={getComment} value={comment}/>
                <button className='add-comment-btn' onClick={addComment}>Add Comment</button>
                {comments.length > 0 ? (comments.map((comment) => {
                    return (
                        <div>
                            <p>{comment.timeStamp}</p> 
                            <p>{comment.comment}</p> 
                        </div>
                    )
                })) : (<></>)}
            </>) : (<></>)}
        </div>
    )
}