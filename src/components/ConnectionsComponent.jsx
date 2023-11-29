import React, { useEffect, useState } from 'react';
import { getAllUsers, addConnection } from '../api/FirestoreAPIs';
import ConnectedUsers from './common/ConnectedUsers';
import '../sass/ConnectionsComponent.scss';

export default function ConnectionsComponent({currentUser}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers(setUsers);
    }, [])

    const getCurrentUser = (id) => {
        addConnection(currentUser.id, id);
    }

    

    return (
        <div className='ConnectionsMain'>
            {users.map((user) => {
                return (user.id === currentUser.id ? <></> : <ConnectedUsers currentUser={currentUser} user={user} getCurrentUser={getCurrentUser}/>)
            })}
        </div>
    );
}