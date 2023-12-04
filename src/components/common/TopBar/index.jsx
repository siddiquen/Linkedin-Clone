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
import { getAllUsers } from '../../../api/FirestoreAPIs';
import './index.scss';
import SearchUsers from '../SearchUsers/Index';



export default function TopBar() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    let navigate = useNavigate();
    const goToRoute = (route) => {
        navigate(route);
    };

    const displayPopup = () => {
        setPopupVisible(!popupVisible);
    };
    
    useEffect(() => {
        getAllUsers(setUsers)
    }, []);

    const handleSearch = () => {
        if (searchInput !== "") {
            let searched = users.filter((user) => {
                return Object.values(user).join("").toLowerCase().includes(searchInput.toLowerCase());
            });
    
            setFilteredUsers(searched);
        } else {
            setFilteredUsers(users);
        }
        
    }

    useEffect(() => {
        let debounced = setTimeout(() => {
            handleSearch()
        }, 1000);

        return () => clearTimeout(debounced);
    }, [searchInput]);

    const openUser = (user) => {
        navigate('/profile', {
            state: {
                id: user.id, email:user.email
            }
        })
    }
    
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
                {isSearch === true ? <SearchUsers setIsSearch= {setIsSearch} setSearchInput={setSearchInput}/> : ( <>
                    <AiOutlineSearch size={20} className='react-icon'onClick={() => setIsSearch(true)}/>
                    <AiOutlineHome size={20} className='react-icon' onClick={() => goToRoute('/home')}/>
                    <AiOutlineUserSwitch size={20} className='react-icon' onClick={() => goToRoute('/connections')}/>
                    <BsBriefcase size={20} className='react-icon' />
                    <AiOutlineMessage size={20} className='react-icon'/>
                    <AiOutlineBell size={20} className='react-icon'/>
                </>)}
            </div>
            <img
                className="userPic"
                src={userPic}
                alt='userPic'
                onClick={displayPopup}
            />
            {searchInput.length === 0 ? 
                <></> : 
                <>
                    <div className='SearchResults'>
                        {filteredUsers.length === 0 ? 
                            <div className='searchInner'>No Data</div> :
                            (filteredUsers.map((user) => (
                                <div className='searchInner' onClick={() => openUser(user)}>
                                    <img src={user.imageLink} />
                                    <p>{user.name}</p>
                                </div>
                            )))
                        }
                    </div>
                </>
            }
        </div>
    );
    
}