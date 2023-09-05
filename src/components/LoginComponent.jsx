import React from 'react';
import { LoginAPI } from "../api/AuthAPI";
import "../sass/LoginComponent.scss";

export default function LoginComponent() {
    //function that runs the loginAPI
    //it will get used in the login button
    const login = () => {
        let res = LoginAPI();
        console.log(res);
    }
    return (
        <div>
            <h1>LoginComponent</h1>
            
            <button onClick={login} className='login-btn'>Log in to Linkedin</button>
        </div>
    );
}