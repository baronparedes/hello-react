import React from 'react';
import { Panel, Button } from 'react-bootstrap/lib'

const TimerControls = () => {
    return (
        <div className="container-fluid">
            <Button bsStyle="success">Start</Button>
            <span className="spacer" />
            <Button bsStyle="danger">Stop</Button>
            <span className="spacer" />
            <Button bsStyle="warning">Reset</Button>
            <span className="spacer" />
            <Button bsStyle="primary">Complete</Button>
        </div>
    );
};

export default TimerControls;