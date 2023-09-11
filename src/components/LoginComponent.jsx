import React, { useState } from 'react';
import { LoginAPI } from "../api/AuthAPI";
import Linkedin_Logo from "/Users/curio/Documents/Coding_Projects/linkedin-clone/src/assets/Linkedin_Logo.png";
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
            <div className='login-wrapper-inner'>
                <h1 className='heading'>Sign in</h1>
                <p className='sub-heading'>Stay updated on your professional world </p>
                <div className="auth-inputs">
                    <input
                        onChange={(event) =>
                        setCredentials({ ...credentials, email: event.target.value })
                        }
                        type='email'
                        className="common-input"
                        placeholder="Email"
                    />
                    <input
                        onChange={(event) =>
                        setCredentials({ ...credentials, password: event.target.value })
                        }
                        type='password'
                        className="common-input"
                        placeholder="Password"
                    />
                </div>
                <button onClick={login} className="login-btn">
                Sign in
                </button>
            </div>
            <hr className="hr-text" data-content="or" />
        </div>
    );
}