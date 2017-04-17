import React from 'react';
import { Panel, ButtonGroup, Button } from 'react-bootstrap/lib'

const TimerTypes = () => {
    return (
        <ButtonGroup bsSize="large">
            <Button bsStyle="success" active>Promodoro</Button>
            <Button bsStyle="success">Short Break</Button>
            <Button bsStyle="success">Long Break</Button>
        </ButtonGroup>
    );
};

export default TimerTypes;