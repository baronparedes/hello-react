import React from 'react';
import { Panel, Button } from 'react-bootstrap/lib'

const TimerControls = (props) => {
    let completedButton = null;
    if (props.showCompleted) {
        completedButton = (
            <span className="spacer">
                <Button bsStyle="primary">Complete</Button>
            </span>
        );
    }
    return (
        <div className="container-fluid">
            <span className="spacer">
                <Button bsStyle="success">Start</Button>
            </span>
            <span className="spacer">
                <Button bsStyle="danger">Stop</Button>
            </span>
            <span className="spacer">
                <Button bsStyle="warning">Reset</Button>
            </span>
            {completedButton}
        </div>
    );
};

export default TimerControls;