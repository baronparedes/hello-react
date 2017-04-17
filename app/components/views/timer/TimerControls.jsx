import React from 'react';
import { Panel, Button } from 'react-bootstrap/lib'

const TimerControls = (props) => {
    let completedButton = null;
    if (props.showCompleted) {
        completedButton = (
            <span className="spacer">
                <Button bsStyle="primary" onClick={props.onCompleteTask}>Complete</Button>
            </span>
        );
    }
    return (
        <div className="container-fluid">
            <span className="spacer">
                <Button bsStyle="success" onClick={props.onStartTimer}>Start</Button>
            </span>
            <span className="spacer">
                <Button bsStyle="danger" onClick={props.onStopTimer}>Stop</Button>
            </span>
            <span className="spacer">
                <Button bsStyle="warning" onClick={props.onResetTimer}>Reset</Button>
            </span>
            {completedButton}
        </div>
    );
};

export default TimerControls;