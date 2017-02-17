import React from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap/lib'
import TaskList from './TaskList'
import { connect } from 'react-redux'
import * as tasksActions from './actions/tasksActions'
import TaskItemEditorModal from './TaskItemEditorModal'

class TaskGrid extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            showModal: false
        }
    }
    componentWillMount() {
        this.props.dispatch(tasksActions.fetchTasks());
    }
    handleTaskItemDelete(id) {
        this.props.dispatch(tasksActions.deleteTask(id));
    }
    handleTaskItemAdd() {
        this.props.dispatch(tasksActions.addTask());
    }
    handleTaskItemAddFromModal(task) {
        this.props.dispatch(tasksActions.addTask(task));
    }
    toggleModalEditor() {
        this.setState({ showModal: !this.state.showModal });
    }
    handleTaskItemUpdate(task) {
        this.props.dispatch(tasksActions.updateTask(task));
    }
    render() {
        return (
            <div className="taskgrid-container">
                <Table responsive striped bordered condensed hover className="table-custom table-taskgrid">
                    <thead>
                        <tr>
                            <th>Task Details</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th className="action-column"></th>
                        </tr>
                    </thead>
                    <TaskList
                        onTaskItemDeleted={this.handleTaskItemDelete.bind(this)}
                        onTaskItemUpdated={this.handleTaskItemUpdate.bind(this)}
                        tasks={this.props.tasks} />
                </Table>
                <Button bsStyle="primary" onClick={this.toggleModalEditor.bind(this)}>
                    New Task
                </Button>
                <TaskItemEditorModal 
                    showModal={this.state.showModal} 
                    onTaskItemAdded={this.handleTaskItemAddFromModal.bind(this)}
                    onToggleModal={this.toggleModalEditor.bind(this)} />
            </div>
        );
    }
}

export default connect(
    (store) => {
        return {
            tasks: store.tasks.tasks,
        }
    }
)(TaskGrid)