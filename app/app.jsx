'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './components/heading.jsx'
import Section from './components/section.jsx'
import Button from 'react-bootstrap/lib/Button'
import 'react-bootstrap'
import 'react-fontawesome'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './styles/base.less'

class App extends React.Component{
  render(){
    return(
      <div className="panel panel-default">
        <Heading name="Baron Paredes"/>
        <Section/>
        <Button bsStyle="primary">Click Me!</Button>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));