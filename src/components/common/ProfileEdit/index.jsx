import React, { useState } from 'react';
import { editProfile} from "../../../api/FirestoreAPIs.jsx";
import './index.scss';

export default function ProfileEdit({onEdit, currentUser}) {
    const [editInputs, setEditInputs] = useState(currentUser);
    const getInput = (event) => {
        let {name, value} = event.target;
        let input = {[name]: value};
        setEditInputs({...editInputs, ...input});
    };
    const updateProfileData = async () => {
        await editProfile(currentUser?.id, editInputs);
        await onEdit();
    };

    return (
    <div className="profile-card">
        <div className="edit-btn">
            <button onClick={onEdit}>Go Back</button>
        </div>
        <div className='profileEditInputs'>
            <label>Full Name</label>
            <input onChange={getInput} className='common-input' placeholder='Name' name='name' value={editInputs.name}/>
            <label>Headline</label>
            <input onChange={getInput} className='common-input' placeholder='Headline' name='headline' value={editInputs.headline}/>
            <label>Country</label>
            <input onChange={getInput} className='common-input' placeholder='Country' name='country' value={editInputs.country}/>
            <label>City</label>
            <input onChange={getInput} className='common-input' placeholder='City' name='city' value={editInputs.city}/>
            <label>Company</label>
            <input onChange={getInput} className='common-input' placeholder='Company' name='company' value={editInputs.company}/>
            <label>Industry</label>
            <input onChange={getInput} className='common-input' placeholder='Industry' name='industry' value={editInputs.industry}/>
            <label>University</label>
            <input onChange={getInput} className='common-input' placeholder='University' name='university' value={editInputs.university}/>
            <label>Website</label>
            <input onChange={getInput} className='common-input' placeholder='Website' name='website' value={editInputs.website}/>
            <label>About</label>
            <textArea rows = {5} onChange={getInput} className='common-textarea' placeholder='About Me' name='about' value={editInputs.about}/>
            <label>Skills</label>
            <input onChange={getInput} className='common-input' placeholder='Skills' name='skills' value={editInputs.skills}/>
        </div>
        <div className="save-container">
            <button className="save-btn" onClick={updateProfileData}>Save</button>
        </div>
    </div>);
}