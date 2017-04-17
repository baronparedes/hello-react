import React from 'react';

const HighPriorityTasksBadge = (props) => {
    return (
        <span>
                High Priority Tasks
                <span className="badge badge-warning">
                {!!!props.count ? "0" : props.count}
            </span>
        </span>
    );
};

export default HighPriorityTasksBadge;