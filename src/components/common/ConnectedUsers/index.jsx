import React, {useEffect, useState} from "react";
import { getConnections } from "../../../api/FirestoreAPIs";

export default function ConnectedUsers({currentUser, user, getCurrentUser}) {

    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        getConnections(currentUser.id, user.id, setIsConnected);
    }, [currentUser.id, user.id])
    return (
        
        <div className="gridChild" >
            <img src={user.imageLink}/>
            <p className="name">{user.name}</p>
            <p className="headline">{user.headline}</p>
            {isConnected === false ? (<button onClick={() => getCurrentUser(user.id)}>Connect</button>) : <>Already Connected!</>}
        </div>
    )
}