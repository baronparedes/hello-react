import React from 'react';

const TimeRemaining = (props) => {
    console.log(props.timer);
    return (
        <h1>
            {props.timer.interval}
        </h1>
    );
};

export default TimeRemaining;