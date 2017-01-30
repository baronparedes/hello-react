'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap'
import 'react-fontawesome'
// import { AppHeading, AppContent, AppFooter} from './components'
import AppHeading from './components/AppHeading'
import AppContent from './components/AppContent'
import AppFooter from './components/AppFooter'

import 'font-awesome/css/font-awesome.min'
import 'bootstrap/dist/css/bootstrap.min'
import 'bootstrap/dist/css/bootstrap-theme.min'

import './styles/base'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeading />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));