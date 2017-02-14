import React from 'react';
import { Button, ButtonGroup, FormControl } from 'react-bootstrap/lib'

export default class TaskItemEditor extends React.Component {
    static propTypes = {
        task: React.PropTypes.object.isRequired,
        handleTaskItemUpdated: React.PropTypes.func.isRequired,
        toggleEditor: React.PropTypes.func.isRequired
    }
    constructor(props){
        super(props);
        this.onTaskItemUpdated = this.onTaskItemUpdated.bind(this);
    }
    onTaskItemUpdated() {
        let task = {
            id: this.props.task.id,
            name: this.taskName.value,
            description: this.taskDescription.value,
            priority: this.taskPriority.value,
            status: this.taskStatus.value
        }
        this.props.handleTaskItemUpdated(task);
    }
    render() {
        return (
            <tr>
                <td>
                    <FormControl
                        inputRef={ref => { this.taskName = ref; }}
                        componentClass="input"
                        placeholder="name"
                        defaultValue={this.props.task.name} />
                    <FormControl
                        inputRef={ref => { this.taskDescription = ref; }}
                        componentClass="textarea"
                        placeholder="description"
                        defaultValue={this.props.task.description} />
                </td>
                <td>
                    <FormControl
                        inputRef={ref => { this.taskPriority = ref; }}
                        componentClass="select"
                        placeholder="1"
                        defaultValue={this.props.task.priority}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </FormControl>
                </td>
                <td>
                    <FormControl
                        inputRef={ref => { this.taskStatus = ref; }}
                        componentClass="select"
                        placeholder="TODO"
                        defaultValue={this.props.task.status}>
                        <option value="Done">Done</option>
                        <option value="In Progress">In Progress</option>
                        <option value="TODO">TODO</option>
                    </FormControl>
                </td>
                <td>
                    <ButtonGroup>
                        <Button bsStyle="success" onClick={this.onTaskItemUpdated}><i className="fa fa-floppy-o"></i></Button>
                        <Button bsStyle="danger" onClick={this.props.toggleEditor}><i className="fa fa-ban"></i></Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
}