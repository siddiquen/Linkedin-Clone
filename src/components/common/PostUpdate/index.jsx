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
    const sentStatus = async () => {
        let object = {
            status: status, 
            timeStamp: getCurrentTimeStamp("LLL"),
            userEmail: currentUser.email,
            userName: currentUser.name,
            postID: getUniqueId(),
            userId: currentUser.userId,
        };
        await postStatus(object);
        await setModalOpen(false);
        await setStatus("");
    };
    //console.log(currentUser.id);
    //console.log(currentUser.userId);

    useMemo(() => {
        getStatus(setAllStatuses);
    }, []);

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
                    return (
                        <div key={posts.id}>
                            <PostsCard posts = {posts}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}