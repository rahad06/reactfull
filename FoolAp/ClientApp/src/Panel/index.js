import React, {useEffect, useState} from "react";
import axios from "axios";


import Contact from './Contact/index'
import About from './About/index'
import PanelMenu from "./Common/PanelMenu";
import TableEl from "../components/Common/TableEl";
import {Container} from "reactstrap";
import {NavMenu} from "../components/NavMenu";
import TopOverview from "./Home/TopOverview";
import '../styles/panel.css';
import PagesCards from "./Home/PagesCards";

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
        <>
            <Container className="p-5">
                <div className="row "><div className="col-8">
                  <div className="home-tab home-dashboard-overview">
                      <TopOverview/>
                      <PagesCards></PagesCards>
                  </div>
                </div><div className="col-4">
                    <TableEl></TableEl>
                </div></div>
                </Container>
        </>
    );
};

export default Panel
