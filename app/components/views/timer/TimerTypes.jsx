import React from 'react';
import { Panel, ButtonGroup, Button } from 'react-bootstrap/lib'

const TimerTypes = (props) => {
    return (
        <ButtonGroup bsSize="large">
            <Button bsStyle="success"
                onClick={() => { props.onSelectTimer(props.promodoro) }}>
                {props.promodoro.type}
            </Button>
            <Button bsStyle="success"
                onClick={() => { props.onSelectTimer(props.shortBreak) }}>
                {props.shortBreak.type}
            </Button>
            <Button bsStyle="success"
                onClick={() => { props.onSelectTimer(props.longBreak) }}>
                {props.longBreak.type}
            </Button>
        </ButtonGroup>
    );
};

TimerTypes.propTypes = {
    onSelectTimer: React.PropTypes.func.isRequired,
    promodoro: React.PropTypes.object.isRequired,
    shortBreak: React.PropTypes.object.isRequired,
    longBreak: React.PropTypes.object.isRequired,
}

export default TimerTypes;