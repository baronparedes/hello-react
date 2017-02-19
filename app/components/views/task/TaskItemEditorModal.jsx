import React from 'react';
import { Button, FormGroup, FormControl, Modal, Panel, ControlLabel } from 'react-bootstrap/lib'
import * as enums from '../../../core/enums'

export default class TaskItemEditorModal extends React.Component {
    static propTypes = {
        onTaskItemSaved: React.PropTypes.func.isRequired,
        onToggleModal: React.PropTypes.func.isRequired,
        task: React.PropTypes.object
    }
    constructor(props) {
        super(props);
        let task = {}
        if (!this.props.task) {
            task = {
                id: null,
                name: "",
                description: "",
                priority: enums.PRIORITY_ENUM.HIGH,
                priority: enums.STATUS_ENUM.TODO,
                isNew: true
            }
        }
        else {
            task = {
                ...this.props.tasks,
                isNew: false
            };
        }
        this.state = {
            task: task
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.task){
            if (nextProps.task.id !== this.props.task.id) {
                this.setState({ task: nextProps.task });
            }
        }
    }
    handleTaskItemSaved() {
        let task = {
            name: this.taskName.value,
            description: this.taskDescription.value,
            priority: this.taskPriority.value,
            status: this.taskStatus.value,
            isNew: this.state.task.isNew,
            id: this.state.task.id
        }
        this.props.onTaskItemSaved(task);
        this.props.onToggleModal();
    }
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.onToggleModal}>
                <Modal.Header>
                    <Modal.Title>{(this.state.task.isNew) ? "Add New Task" : "Update Task"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Panel>
                        <form>
                            <FormGroup controlId="formGroupTaskName">
                                <ControlLabel>Name</ControlLabel>
                                <FormControl
                                    defaultValue={this.state.task.name}
                                    inputRef={ref => { this.taskName = ref; }}
                                    componentClass="input"
                                    placeholder="name" />
                            </FormGroup>
                            <FormGroup controlId="formGroupTaskDescription">
                                <ControlLabel>Description</ControlLabel>
                                <FormControl
                                    defaultValue={this.state.task.description}
                                    inputRef={ref => { this.taskDescription = ref; }}
                                    componentClass="input"
                                    placeholder="description" />
                            </FormGroup>
                            <FormGroup controlId="formGroupTaskPriority">
                                <ControlLabel>Priority</ControlLabel>
                                <FormControl
                                    defaultValue={this.state.task.priority}
                                    inputRef={ref => { this.taskPriority = ref; }}
                                    componentClass="select"
                                    placeholder={enums.PRIORITY_ENUM.HIGH}>
                                    <option value={enums.PRIORITY_ENUM.HIGH}>1</option>
                                    <option value={enums.PRIORITY_ENUM.MEDIUM}>2</option>
                                    <option value={enums.PRIORITY_ENUM.LOW}>3</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="formGroupTaskStatus">
                                <ControlLabel>Status</ControlLabel>
                                <FormControl
                                    defaultValue={this.state.task.status}
                                    inputRef={ref => { this.taskStatus = ref; }}
                                    componentClass="select"
                                    placeholder={enums.STATUS_ENUM.TODO}>
                                    <option value={enums.STATUS_ENUM.TODO}>TODO</option>
                                    <option value={enums.STATUS_ENUM.InProgress}>In Progress</option>
                                    <option value={enums.STATUS_ENUM.Done}>Done</option>
                                </FormControl>
                            </FormGroup>
                        </form>
                    </Panel>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" onClick={this.handleTaskItemSaved.bind(this)}>Save</Button>
                    <Button bsStyle="danger" onClick={this.props.onToggleModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}