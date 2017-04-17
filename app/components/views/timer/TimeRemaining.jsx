import React from 'react';
import * as h from '../../../core/helpers'

const TimeRemaining = (props) => {
    return (
        <h1>
            {h.format(props.interval)}
        </h1>
    );
};

export default TimeRemaining;