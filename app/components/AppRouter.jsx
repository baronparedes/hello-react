import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import AppHome from './AppHome'
import DashboardView from './views/dashboard/DashboardView'
import TaskView from './views/task/TaskView'

const AppRouter = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={AppHome}>
                <IndexRoute component={DashboardView}></IndexRoute>
                <Route path="tasks" component={TaskView}></Route>
            </Route>
        </Router>
    );
};

export default AppRouter;