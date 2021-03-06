import React from 'react';
import { Button, ButtonGroup, FormControl } from 'react-bootstrap/lib'
import TaskItemDisplay from './TaskItemDisplay'
import TaskItemEditor from './TaskItemEditor'

export default class TaskItem extends React.Component {
    static propTypes = {
        task: React.PropTypes.object.isRequired,
        onTaskItemDeleted: React.PropTypes.func.isRequired,
        onTaskItemUpdated: React.PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            isEditable: this.props.task.isNew,
        }
    }
    handleTaskItemUpdated(item) {
        this.props.onTaskItemUpdated(item);
        this.toggleEditor();
    }
    handleTaskItemDeleted() {
        this.props.onTaskItemDeleted(this.props.task.id);
    }
    toggleEditor() {
        this.setState(prevState => ({
            isEditable: !prevState.isEditable
        }));
    }
    render() {
        if (this.state.isEditable) {
            return <TaskItemEditor
                task={this.props.task}
                toggleEditor={this.toggleEditor.bind(this)}
                handleTaskItemUpdated={this.handleTaskItemUpdated.bind(this)} />
        }
        else {
            return <TaskItemDisplay
                task={this.props.task}
                toggleEditor={this.toggleEditor.bind(this)}
                handleTaskItemDeleted={this.handleTaskItemDeleted.bind(this)} />
        }
    }
}