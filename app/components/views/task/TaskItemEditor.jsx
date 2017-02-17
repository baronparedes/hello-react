import React from 'react';
import { Button, ButtonGroup, FormControl } from 'react-bootstrap/lib'
import * as enums from '../../../core/enums'

export default class TaskItemEditor extends React.Component {
    static propTypes = {
        task: React.PropTypes.object.isRequired,
        handleTaskItemUpdated: React.PropTypes.func.isRequired,
        toggleEditor: React.PropTypes.func.isRequired
    }
    constructor(props){
        super(props);
    }
    onTaskItemUpdated() {
        let task = {
            id: this.props.task.id,
            name: this.taskName.value,
            description: this.taskDescription.value,
            priority: this.taskPriority.value,
            status: this.taskStatus.value,
            isNew: false
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
                        placeholder={enums.PRIORITY_ENUM.HIGH}
                        defaultValue={this.props.task.priority}>
                        <option value={enums.PRIORITY_ENUM.HIGH}>1</option>
                        <option value={enums.PRIORITY_ENUM.MEDIUM}>2</option>
                        <option value={enums.PRIORITY_ENUM.LOW}>3</option>
                    </FormControl>
                </td>
                <td>
                    <FormControl
                        inputRef={ref => { this.taskStatus = ref; }}
                        componentClass="select"
                        placeholder={enums.STATUS_ENUM.TODO}
                        defaultValue={this.props.task.status}>
                        <option value={enums.STATUS_ENUM.Done}>Done</option>
                        <option value={enums.STATUS_ENUM.InProgress}>In Progress</option>
                        <option value={enums.STATUS_ENUM.TODO}>TODO</option>
                    </FormControl>
                </td>
                <td>
                    <ButtonGroup>
                        <Button bsStyle="success" onClick={this.onTaskItemUpdated.bind(this)}><i className="fa fa-floppy-o"></i></Button>
                        <Button bsStyle="danger" onClick={this.props.toggleEditor}><i className="fa fa-ban"></i></Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
}