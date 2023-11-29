import React, {useEffect, useState} from "react";
import { getConnections } from "../../../api/FirestoreAPIs";

export default function ConnectedUsers({currentUser, user, getCurrentUser}) {

    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        getConnections(currentUser.id, user.id, setIsConnected);
    }, [currentUser.id, user.id])
    return (
        isConnected === false ? 
        <div className="gridChild" onClick={() => getCurrentUser(user.id)}>
            <p>{user.name}</p>
            <p>{user.headline}</p>
        </div> : <>You have all Connections!</>
    )
}