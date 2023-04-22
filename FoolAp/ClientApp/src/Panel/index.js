import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';

import Contact from './Contact/index'

const Panel = () => {
    const [userInfo, setUserInfo] = useState({});

    
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response = await axios.get("/api/Users/1");
                setUserInfo(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getUserInfo().then(res => console.log(res))
        
        
    }, []);
    // useEffect(() => {
    //     const userInfo = {
    //         id: sessionStorage.getItem('id'),
    //         username: sessionStorage.getItem('username'),
    //         email: sessionStorage.getItem('email'),
    //         role: sessionStorage.getItem('role'),
    //     };
    //
    //     dispatch(setUser(userInfo));
    //     dispatch(setUserLoggedIn(true));
    // }, [dispatch]);
    return (
        <div>
            <h1>Welcome to the panel, {userInfo.userName}!</h1>
            <p>Your email address is {userInfo.email}.</p>
            <p>You joined on {userInfo.joinDate}.</p>
            <Contact/>
        </div>
    );
};

export default Panel;
