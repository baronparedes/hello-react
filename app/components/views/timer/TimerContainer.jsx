import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap/lib'
import * as timerActions from '../../../actions/timerActions'
import * as enums from '../../../core/enums'
import TimerTypes from './TimerTypes'
import TimeRemaining from './TimeRemaining'
import TimerControls from './TimerControls'
import TaskCard from '../task/TaskCard'
import RedirectToTasksButton from '../task/RedirectToTasksButton'

class TimerContainer extends Component {
    handleSelectTimer(timer) {
        this.props.dispatch(timerActions.selectTimer(timer));
    }
    render() {
        const promodoro = this.props.timerTypes.find(_ => _.type === enums.TIMER_TYPE_ENUM.Promodoro);
        const shortBreak = this.props.timerTypes.find(_ => _.type === enums.TIMER_TYPE_ENUM.ShortBreak);
        const longBreak = this.props.timerTypes.find(_ => _.type === enums.TIMER_TYPE_ENUM.LongBreak);
        return (
            <Panel className="container-small timer">
                <div className="container-fluid">
                    <TimerTypes
                        promodoro={promodoro}
                        shortBreak={shortBreak}
                        longBreak={longBreak}
                        onSelectTimer={this.handleSelectTimer.bind(this)}
                    />
                    <TimeRemaining timer={this.props.selectedTimer} />
                    <TimerControls showCompleted={this.props.selectedTask !== null} />
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
                                <TaskCard className="selected-task" task={this.props.selectedTask} />
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
            selectedTimer: store.timer.selectedTimer,
            timerTypes: store.timer.timerTypes
        }
    }
)(TimerContainer)