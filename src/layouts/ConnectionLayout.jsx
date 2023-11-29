import React, {useMemo, useState} from 'react'
import Connections from '../pages/Connections'; 
import { getCurrentUser } from '../api/FirestoreAPIs';
import TopBar from '../components/common/TopBar';

export default function ConnectionLayout() {
    const [currentUser, setCurrentUser] = useState({})
    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, [])
    return (
        <div>
            <TopBar />
            <Connections currentUser={currentUser}/>
        </div>
    )
}