import React from 'react';
import { Button, Modal } from 'antd';
import "./index.scss";

export default function FileUploadModal({modalOpen, setModalOpen, getImage, uploadImage}) {
    return (
        <div>
            <Modal
                title="Upload a New Image"
                centered open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                footer = {[
                    <Button key="submit" type="primary" onClick={uploadImage}>
                        Upload Profile Picture
                    </Button>
                ]}
            >
                <div className='imageUploadMain'>
                    <label className="uploadBtn" for="imageUpload">Add an Image</label>
                    <input hidden id="imageUpload" type={"file"} onChange={getImage}/>
                </div>
            </Modal>
        </div>
    )
}