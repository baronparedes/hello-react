import React from 'react'
import FooterInfo from './layout/FooterInfo'
import NavigationBar from './layout/NavigationBar'

export default class AppHome extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                {this.props.children}
                <FooterInfo />
            </div>
        );
    }
}