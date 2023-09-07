import React, { useState } from 'react';
import { LoginAPI } from "../api/AuthAPI";
import Linkedin_Logo from "../assets/Linkedin-Logo";
import "../sass/LoginComponent.scss";

export default function LoginComponent() {
    const [credentials, setCredentials] = useState({});
    //function that runs the loginAPI
    //it will get used in the login button
    const login = async () => {
        try {
            let res = await LoginAPI(credentials.email, credentials.password)
            console.log(res?.user);
        } catch(err) {
            console.log(err.errors.message);
        }
        
    };

    return (
        <div className="login-wrapper">
            <img src={Linkedin_Logo} className='LinkedinLogo'/>
            <h1>LoginComponents</h1>
            <div className="auth-inputs">
                <input
                    onChange={(event) =>
                    setCredentials({ ...credentials, email: event.target.value })
                    }
                    className="common-input"
                    placeholder="Email"
                />
                <input
                    onChange={(event) =>
                    setCredentials({ ...credentials, password: event.target.value })
                    }
                    className="common-input"
                    placeholder="Password"
                />
            </div>
            <button onClick={login} className="login-btn">
            Sign in
            </button>
        </div>
    );
}