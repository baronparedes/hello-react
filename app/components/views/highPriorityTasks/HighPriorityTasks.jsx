import React from 'react';
import * as enums from '../../../core/enums'
import { Overlay } from 'react-bootstrap/lib'

export default class HighPriorityTasks extends React.Component {
    static propTypes = {
        tasks: React.PropTypes.array.isRequired
    }
    renderTasks() {
        if (this.props.tasks.length === 0) {
            return <p className="text-center">No High Priority Tasks</p>
        }
        return this.props.tasks.map((task) => {
            return (
                <p key={task.id}>
                    {task.name}
                </p>
            )
        })
    }
    render() {
        return (
            <div className="tasks-hp-container container">
                {this.renderTasks()}
            </div>
        );
    }
}