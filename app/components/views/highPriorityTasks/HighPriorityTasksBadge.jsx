import React from 'react';

export default class HighPriorityTasksBadge extends React.Component {
    render() {
        return (
            <span>
                High Priority Tasks
                <span className="badge badge-warning">
                    {!!!this.props.count ? "0" : this.props.count}
                </span>
            </span>
        );
    }
}