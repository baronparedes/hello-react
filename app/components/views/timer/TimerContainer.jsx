import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap/lib'
import TimerTypes from './TimerTypes'
import TimeRemaining from './TimeRemaining'
import TimerControls from './TimerControls'
import TaskCard from '../task/TaskCard'
import RedirectToTasksButton from '../task/RedirectToTasksButton'

class TimerContainer extends Component {
    render() {
        return (
            <Panel className="container-small timer">
                <div className="container-fluid">
                    <TimerTypes />
                    <TimeRemaining timeRemaining="25:00" />
                    <TimerControls />
                </div>
                <br />
                <div className="container-fluid">
                    {
                        (this.props.selectedTask === null) ?
                        (
                            <RedirectToTasksButton title="Please select a task" />
                        )
                        :
                        (
                            <TaskCard className="selected-task" task={this.props.selectedTask}/>
                        )
                    }
                </div>
            </Panel>
        );
    }
}


export default connect(
    (store) => {
        return {
            selectedTask: store.selectedTask,
        }
    }
)(TimerContainer)