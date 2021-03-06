import React from 'react'
import FooterInfo from './layout/FooterInfo'
import NavigationBar from './layout/NavigationBar'

const AppHome = (props) => {
    return (
        <div id="page-top">
            <NavigationBar />
            <div id="app-content">
                {props.children}
            </div>
            <FooterInfo />
        </div>
    );
};

export default AppHome;