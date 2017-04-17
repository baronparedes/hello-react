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
    componentWillReceiveProps(nextProps) {
        if (nextProps.timeLeft === 0) {
            alert("time us up!");
        }
    }
    handleSelectTimer(timer) {
        this.props.dispatch(timerActions.selectTimer(timer));
    }
    handleStartTimer() {
        this.props.dispatch(timerActions.startTimer());
    }
    handleStopTimer() {
        this.props.dispatch(timerActions.stopTimer());
    }
    handleResetTimer() {
        this.props.dispatch(timerActions.resetTimer());
    }
    handleCompleteTask() {
        alert('complete task')
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
                        onSelectTimer={this.handleSelectTimer.bind(this)} />
                    <TimeRemaining
                        interval={this.props.timeLeft} />
                    <TimerControls
                        showCompleted={this.selectedTask !== null}
                        onStartTimer={this.handleStartTimer.bind(this)}
                        onStopTimer={this.handleStopTimer.bind(this)}
                        onResetTimer={this.handleResetTimer.bind(this)}
                        onCompleteTask={this.handleCompleteTask.bind(this)}
                    />
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
            timerTypes: store.timer.timerTypes,
            timeLeft: store.timer.timeLeft
        }
    }
)(TimerContainer)