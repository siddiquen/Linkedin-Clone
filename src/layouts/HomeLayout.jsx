import React, {useMemo, useState} from 'react'
import Home from '../pages/Home'; 
import { getCurrentUser } from '../api/FirestoreAPIs';
import TopBar from '../components/common/TopBar';

export default function HomeLayout() {
    const [currentUser, setCurrentUser] = useState({})
    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, [])
    return (
        <div>
            <TopBar />
            <Home currentUser={currentUser}/>
        </div>
    )
}