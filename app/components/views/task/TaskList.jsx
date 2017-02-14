import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap/lib'
import TaskItem from './TaskItem'

export default class TaskList extends React.Component {
    static propTypes = {
        tasks: React.PropTypes.array.isRequired,
        onTaskItemDelete: React.PropTypes.func.isRequired,
        onTaskItemUpdate: React.PropTypes.func.isRequired
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
                        onTaskItemDelete={this.props.onTaskItemDelete}
                        onTaskItemUpdate={this.props.onTaskItemUpdate}
                        task={_} />;
                })}
            </tbody>
        );
    }
}