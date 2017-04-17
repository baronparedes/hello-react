import React from 'react';
import { Jumbotron, Buttonm, Panel } from 'react-bootstrap/lib'
import TimerContainer from '../timer/TimerContainer'
import IncompleteTasksContainer from '../incompleteTasks/IncompleteTasksContainer'

export default class HomeView extends React.Component {
    render() {
        return (
            <div>
                <div id="hero-header">
                    <Jumbotron>
                        <TimerContainer />
                    </Jumbotron>
                </div>
                <div className="container">
                    <IncompleteTasksContainer />
                </div>
            </div>
        );
    }
}