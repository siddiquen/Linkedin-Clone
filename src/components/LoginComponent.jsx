import React, { useState } from 'react';
import { LoginAPI } from "../api/AuthAPI";
import "../sass/LoginComponent.scss";

export default function LoginComponent() {
    const [credentials, setCredentials] = useState({});
    //function that runs the loginAPI
    //it will get used in the login button
    const login = () => {
        let res = LoginAPI(credentials.email, credentials.password)
        console.log(res);
    };

    return (
        <div className="login-wrapper">
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