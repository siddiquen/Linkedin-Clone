import React, {useState, useMemo} from "react";
import { onLogout } from "../../../api/AuthAPI";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { getCurrentUser } from "../../../api/FirestoreAPIs";

export default function ProfilePopup() {
    let navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, [])

    return (
        <div className="popupCard">
            <p className="name">{currentUser?.name}</p>
            <p className="headline">{currentUser?.headline}</p>
            
            <Button title = 'View Profile' 
                onClick={() => 
                    navigate('/profile', {state: {id:currentUser?.userId, email:currentUser.email}})
                }
            />
            <Button title = 'Logout' onClick={onLogout}/>
            {/* <ul className="popupOptions">
                <li className="popupOption" 
                    
                >
                    Logout
                </li>
                <li className="popupOption" 
                    onClick={onLogout}
                >
                    Logout
                </li>
            </ul> */}
        </div>
    );
}