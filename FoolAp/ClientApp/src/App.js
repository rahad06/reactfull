import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import {Layout} from './components/Layout';
import './custom.css';
import './styles/remixicon.css';
import {NavMenu} from "./components/NavMenu";
import PanelMenu from "./Panel/Common/PanelMenu";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            // <Layout>

            <Routes>
                {AppRoutes.map((route, index) => {
                    const {element, requireAuth, ...rest} = route;
                    return <Route key={index} {...rest} element={requireAuth ? (
                        <>
                            <div className='d-flex'>
                            <PanelMenu></PanelMenu>
                            <AuthorizeRoute {...rest} element={element}/>
                            </div>
                        </>
                        )
                        : element}/>;
                })}
            </Routes>
            // </Layout>
        )
    }
}
