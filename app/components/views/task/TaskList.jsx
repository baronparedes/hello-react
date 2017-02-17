import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap/lib'
import TaskItem from './TaskItem'

export default class TaskList extends React.Component {
    static propTypes = {
        tasks: React.PropTypes.array.isRequired,
        onTaskItemDeleted: React.PropTypes.func.isRequired,
        onTaskItemUpdated: React.PropTypes.func.isRequired
    }
    constructor(props){
        super(props);
    }
    render() {
        return (
            <tbody>
                {this.props.tasks.map((_) => {
                    return <TaskItem
                        key={_.id}
                        onTaskItemDeleted={this.props.onTaskItemDeleted}
                        onTaskItemUpdated={this.props.onTaskItemUpdated}
                        task={_} />;
                })}
            </tbody>
        );
    }
}