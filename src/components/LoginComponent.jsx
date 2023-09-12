import React, { useState } from 'react';
import { LoginAPI, RegisterAPI} from "../api/AuthAPI";
import Linkedin_Logo from "/Users/curio/Documents/Coding_Projects/linkedin-clone/src/assets/Linkedin_Logo.png";
import GoogleButton from 'react-google-button';
import "../sass/LoginComponent.scss";

export default function LoginComponent() {
    const [credentials, setCredentials] = useState({});
    //function that runs the loginAPI
    //it will get used in the login button
    const login = async () => {
        try {
            let res = await LoginAPI(credentials.email, credentials.password)
            console.log(res);
        } catch(err) {
            console.log(err);
            let res = await RegisterAPI(credentials.email, credentials.password)
            console.log(res);
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
            <div className='google-btn-container'>
                <GoogleButton
                    className='google-button'
                    onClick={() => { console.log('Google button clicked') }}
                />
                <p className='go-to-signup'>New to Linkedin? <span className='join-now'>Join now</span>
                </p>
            </div>
        </div>
    );
}