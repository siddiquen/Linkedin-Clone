import React, { useEffect } from 'react';
import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import Loader from '../components/common/Loader';

export default function Home() {
    let navigate = useNavigate;
    useEffect(() => {
        onAuthStateChanged(auth, res => {
            if (!res?.accessToken) {
                navigate('/')
            } else {
                return <Loader />;
            }
        })
    }, [])
    return <HomeComponent />;
}