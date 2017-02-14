import React from 'react';
import { Button, ButtonGroup, FormControl } from 'react-bootstrap/lib'
import TaskItemDisplay from './TaskItemDisplay'
import TaskItemEditor from './TaskItemEditor'

export default class TaskItem extends React.Component {
    static propTypes = {
        task: React.PropTypes.object.isRequired,
        onTaskItemDelete: React.PropTypes.func.isRequired,
        onTaskItemUpdate: React.PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);

        this.toggleEditor = this.toggleEditor.bind(this);
        this.handleTaskItemUpdated = this.handleTaskItemUpdated.bind(this);
        this.handleTaskItemDeleted = this.handleTaskItemDeleted.bind(this);

        let isEditable = false;
        if (this.props.task.isNew) {
            isEditable = true;
        }

        this.state = {
            isEditable: isEditable,
            task: this.props.task
        }
    }
    handleTaskItemUpdated(item) {
        this.setState({ task: item });
        this.props.onTaskItemUpdate(item);
        this.toggleEditor();
    }
    handleTaskItemDeleted() {
        var task = this.state.task;
        this.props.onTaskItemDelete(task);
    }
    toggleEditor() {
        this.setState(prevState => ({
            isEditable: !prevState.isEditable
        }));
    }
    render() {
        if (this.state.isEditable) {
            return <TaskItemEditor
                task={this.state.task}
                toggleEditor={this.toggleEditor}
                handleTaskItemUpdated={this.handleTaskItemUpdated} />
        }
        else {
            return <TaskItemDisplay
                task={this.state.task}
                toggleEditor={this.toggleEditor}
                handleTaskItemDeleted={this.handleTaskItemDeleted} />
        }
    }
}