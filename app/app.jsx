'use strict';

import 'react-bootstrap'
import 'react-fontawesome'
import 'react-router'
import 'react-router-bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import 'font-awesome/css/font-awesome.min'
import 'bootstrap/dist/css/bootstrap.min'
import 'bootstrap/dist/css/bootstrap-theme.min'
import './styles/base'

import AppHome from './components/AppHome'
import AppRouter from './components/AppRouter'

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, 
    document.getElementById('app')
);