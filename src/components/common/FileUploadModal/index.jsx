import React from 'react';
import { Button, Modal, Progress, Space} from 'antd';
import "./index.scss";

export default function FileUploadModal({modalOpen, setModalOpen, getImage, uploadImage, currentImage, progress}) {
    return (
        <div>
            <Modal
                title="Upload a New Image"
                centered open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                footer = {[
                    <Button disabled={currentImage.name ? false : true} key="submit" type="primary" onClick={uploadImage}>
                        Upload Profile Picture
                    </Button>
                ]}
            >
                <div className='imageUploadMain'>
                    <p>{currentImage.name}</p>
                    <label className="uploadBtn" for="imageUpload">Add an Image</label>
                    {progress === 0 ? (<></>) :
                        (<div className='progressBar'>
                            <Progress type='circle' percent={progress} />
                        </div>)
                    }
                    <input hidden id="imageUpload" type={"file"} onChange={getImage}/>
                </div>
            </Modal>
        </div>
    )
}