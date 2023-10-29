import React from "react";
import { onLogout } from "../../../api/AuthAPI";
import "./index.scss";

export default function ProfilePopup() {
    return (
        <div className="popupCard">
            <ul className="popupOptions">
                <li className="popupOption" onClick={onLogout}>Logout</li>
            </ul>
        </div>
    );
}