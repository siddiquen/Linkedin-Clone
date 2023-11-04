import React, {useEffect, useState} from 'react';
import LinkedinLogo from '../../../assets/Linkedin_Logo.png';
import userPic from '../../../assets/userPic.png';
import {
    AiOutlineHome,
    AiOutlineUserSwitch, 
    AiOutlineSearch,
    AiOutlineMessage,
    AiOutlineBell} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {BsBriefcase} from 'react-icons/bs';
import ProfilePopup from '../PofilePopup';
import './index.scss';




export default function TopBar() {
    const [popupVisible, setPopupVisible] = useState(false);

    let navigate = useNavigate();
    const goToRoute = (route) => {
        navigate(route);
    };

    const displayPopup = () => {
        setPopupVisible(!popupVisible);
    };

    
    return (
        <div className='topbar-main'>
            {popupVisible ? (
                <div className="popup-position">
                    <ProfilePopup />
                </div>
                ) : (<></>)
            }
            <img className="linkedin-logo" src={LinkedinLogo} alt='LinkedinLogo'/>
            <div className='react-icons'>
                <AiOutlineSearch size={20} className='react-icon'/>
                <AiOutlineHome size={20} className='react-icon' onClick={() => goToRoute('/home')}/>
                <AiOutlineUserSwitch size={20} className='react-icon' />
                <BsBriefcase size={20} className='react-icon' />
                <AiOutlineMessage size={20} className='react-icon'/>
                <AiOutlineBell size={20} className='react-icon'/>
            </div>
            <img
                className="userPic"
                src={userPic}
                alt='userPic'
                onClick={displayPopup}
            />
        </div>
    );
    
}