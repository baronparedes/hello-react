import React from 'react';
import { Button, FormGroup, FormControl, Modal, Panel, ControlLabel } from 'react-bootstrap/lib'
import * as enums from '../../../core/enums'

export default class TaskItemEditorModal extends React.Component {
    static propTypes = {
        onTaskItemAdded: React.PropTypes.func.isRequired,
        onToggleModal: React.PropTypes.func.isRequired
    }
    initalizeFields() {
        this.taskName.value = "";
        this.taskDescription.value = "";
        this.taskPriority.value = enums.PRIORITY_ENUM.HIGH;
        this.taskStatus.value = enums.PRIORITY_ENUM.TODO;
    }
    handleTaskItemAdded() {
        let task = {
            name: this.taskName.value,
            description: this.taskDescription.value,
            priority: this.taskPriority.value,
            status: this.taskStatus.value,
            isNew: true
        }
        this.props.onTaskItemAdded(task);
        this.props.onToggleModal();
        this.initalizeFields();
    }
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.onToggleModal}>
                <Modal.Header>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Panel>
                        <form>
                            <FormGroup controlId="formGroupTaskName">
                                <ControlLabel>Name</ControlLabel>
                                <FormControl
                                    inputRef={ref => { this.taskName = ref; }}
                                    componentClass="input"
                                    placeholder="name" />
                            </FormGroup>
                            <FormGroup controlId="formGroupTaskDescription">
                                <ControlLabel>Description</ControlLabel>
                                <FormControl
                                    inputRef={ref => { this.taskDescription = ref; }}
                                    componentClass="input"
                                    placeholder="name" />
                            </FormGroup>
                            <FormGroup controlId="formGroupTaskPriority">
                                <ControlLabel>Priority</ControlLabel>
                                <FormControl
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
                    <Button bsStyle="success" onClick={this.handleTaskItemAdded.bind(this)}>Save</Button>
                    <Button onClick={this.props.onToggleModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}