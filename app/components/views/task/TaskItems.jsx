'use strict';

import React from 'react';

export default class TaskItems extends React.Component {
    generateTaskItem(task) {
        return (
            <tr>
                <td>{task.id}</td>
                <td>
                    <h4>{task.name}</h4>
                    <small>{task.description}</small>
                </td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
            </tr>
        );
    }
    render() {
        return (
            <tbody>
                {this.props.tasks.map((_) => this.generateTaskItem(_))}
            </tbody>
        );
    }
}