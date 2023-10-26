import React, { useState} from "react";
import ModalComponent from "../Modal";
import './index.scss';

export default function PostStatus() {
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState('')

    return <div className="post-status-main">
        <div className="post-status">
            <button className="open-post-modal" onClick={() => setModalOpen(true)}>Start a Post</button>
        </div>
        <ModalComponent
            setStatus={setStatus}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            status={status}
        />
    </div>;
}