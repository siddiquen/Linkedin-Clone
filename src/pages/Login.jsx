import React, { useEffect } from 'react';
import LoginComponent from '../components/LoginComponent';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseConfig';

export default function Login() {
    useEffect(() => {
        onAuthStateChanged(auth, res => {
            console.log(res?.accessToken);
        })
    }, [])
    return <LoginComponent />;
}