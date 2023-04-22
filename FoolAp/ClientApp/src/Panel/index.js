import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setUserLoggedIn } from '../Store/actions/authActions'
import { setUser } from '../Store/actions/'

const Panel = () => {
    const [userInfo, setUserInfo] = useState({});
    const dispatch = useDispatch();

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
    useEffect(() => {
        const userInfo = {
            id: sessionStorage.getItem('id'),
            username: sessionStorage.getItem('username'),
            email: sessionStorage.getItem('email'),
            role: sessionStorage.getItem('role'),
        };

        dispatch(setUser(userInfo));
        dispatch(setUserLoggedIn(true));
    }, [dispatch]);
    return (
        <div>
            <h1>Welcome to the panel, {userInfo.userName}!</h1>
            <p>Your email address is {userInfo.email}.</p>
            <p>You joined on {userInfo.joinDate}.</p>
        </div>
    );
};

export default Panel;
