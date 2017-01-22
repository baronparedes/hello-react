import React from 'react';
import NavigationBar from './layout/NavigationBar'
import HeaderInfo from './layout/HeaderInfo'


export default class AppHeading extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <HeaderInfo />
      </div>
    );
  }
}