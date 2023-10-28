import React, { useState, useMemo} from "react";
import ModalComponent from "../Modal";
import { getStatus, postStatus } from "../../../api/FirestoreAPIs";
import PostsCard from "../PostsCard";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import './index.scss';

export default function PostStatus() {
    let userEmail = localStorage.getItem('userEmail');
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState('');
    const [allStatuses, setAllStatuses] = useState([]);
    const sentStatus = async () => {
        let object = {
            status: status, 
            timeStamp: getCurrentTimeStamp("LLL"),
            userEmail: userEmail,
        };
        await postStatus(object);
        await setModalOpen(false);
        await setStatus("");
    };

    useMemo(() => {
        getStatus(setAllStatuses);
    }, [])

    return (
        <div className="post-status-main">
            <div className="post-status">
                <button className="open-post-modal" onClick={() => setModalOpen(true)}>
                    Start a Post
                </button>
            </div>

            <ModalComponent
                setStatus={setStatus}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                status={status}
                sendStatus = { sentStatus}
            />

            <div>
                {allStatuses.map((posts) => {
                    return <PostsCard posts = {posts}/>;
                })}
            </div>
        </div>
    );
}