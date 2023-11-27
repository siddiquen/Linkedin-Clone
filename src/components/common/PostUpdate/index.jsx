import React, { useState, useMemo} from "react";
import ModalComponent from "../Modal";
import { getStatus, postStatus } from "../../../api/FirestoreAPIs";
import PostsCard from "../PostsCard";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import { getUniqueId } from "../../../helpers/getUniqueId";
import './index.scss';

export default function PostStatus({currentUser}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState('');
    const [allStatuses, setAllStatuses] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    const sentStatus = async () => {
        let object = {
            status: status, 
            timeStamp: getCurrentTimeStamp("LLL"),
            userEmail: currentUser.email,
            userName: currentUser.name,
            postID: getUniqueId(),
            userId: currentUser.id,
        };
        await postStatus(object);
        await setModalOpen(false);
        await setStatus("");
    };

    useMemo(() => {
        getStatus(setAllStatuses);
    }, []);

    const getEditData = (posts) => {
        setModalOpen(true);
        setStatus(posts?.status);
        setIsEdit(true);
    };

    return (
        <div className="post-status-main">
            <div className="post-status">
                <button className="open-post-modal" onClick={() => {
                    setModalOpen(true)
                    setIsEdit(false)}}>
                    Start a Post
                </button>
            </div>

            <ModalComponent
                setStatus={setStatus}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                status={status}
                sendStatus = { sentStatus}
                isEdit={isEdit}
            />

            <div>
                {allStatuses.map((posts) => {
                    return (
                        <div key={posts.id}>
                            <PostsCard posts = {posts} getEditData={getEditData}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}