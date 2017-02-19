import React from 'react';

export default class HighPriorityTasksBadge extends React.Component {
    static propTypes = {
        count: React.PropTypes.number.isRequired
    }
    render() {
        return (
            <span>
                High Priority Tasks
                <span className="badge badge-warning">
                    {this.props.count}
                </span>
            </span>
        );
    }
}