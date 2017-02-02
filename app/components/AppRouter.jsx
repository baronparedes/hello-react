import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import AppHome from './AppHome'
import HomeView from './views/home/HomeView'
import TaskView from './views/task/TaskView'

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={AppHome}>
                    <IndexRoute component={HomeView}></IndexRoute>
                    <Route path="tasks" component={TaskView}></Route>
                </Route>
            </Router>
        );
    }
}