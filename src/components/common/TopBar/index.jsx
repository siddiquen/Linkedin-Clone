import React from 'react';
import LinkedinLogo from '../../../assets/Linkedin_Logo.png';
import './index.scss';
import {AiOutlineHome} from 'react-icons/ai';

export default function TopBar() {
    return <div className='topbar-main'>
        <img className="linkedin-logo" src={LinkedinLogo} alt='LinkedinLogo'/>
        <AiOutlineHome size={25}/>
    </div>;
    
}