'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap'
import 'react-fontawesome'
// import { AppHeading, AppContent, AppFooter} from './components'
import AppHeading from './components/AppHeading'
import AppContent from './components/AppContent'
import AppFooter from './components/AppFooter'

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'

// import './styles/bootstrap-themes/freelancer.min.css'
import './styles/base.scss'

export default class App extends React.Component {
  render() {
    return (
      <div className="page-wrap">
        <AppHeading />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));