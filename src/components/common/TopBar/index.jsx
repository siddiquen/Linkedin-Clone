import React from 'react';
import LinkedinLogo from '../../../assets/Linkedin_Logo.png';
import userPic from '../../../assets/userPic.png';
import './index.scss';
import {
    AiOutlineHome,
    AiOutlineUserSwitch, 
    AiOutlineSearch,
    AiOutlineMessage,
    AiOutlineBell} from 'react-icons/ai';
import {BsBriefcase} from 'react-icons/bs';


export default function TopBar() {
    return <div className='topbar-main'>
        <img className="linkedin-logo" src={LinkedinLogo} alt='LinkedinLogo'/>
        <div className='react-icons'>
            <AiOutlineSearch size={20} className='react-icon'/>
            <AiOutlineHome size={20} className='react-icon'/>
            <AiOutlineUserSwitch size={20} className='react-icon'/>
            <BsBriefcase size={20} className='react-icon'/>
            <AiOutlineMessage size={20} className='react-icon'/>
            <AiOutlineBell size={20} className='react-icon'/>
        </div>
        <img className="userPic" src={userPic} alt='userPic'/>
    </div>;
    
}