import React from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap/lib'
import TaskList from './TaskList'
import { connect } from 'react-redux'
import * as tasksActions from './actions/tasksActions'

class TaskGrid extends React.Component {
    componentWillMount() {
        this.props.dispatch(tasksActions.fetchTasks());
    }
    handleTaskItemDelete(id) {
        this.props.dispatch(tasksActions.deleteTask(id));
    }
    handleTaskItemAdd() {
        this.props.dispatch(tasksActions.addTask());
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
                        onTaskItemDelete={this.handleTaskItemDelete.bind(this)}
                        onTaskItemUpdate={this.handleTaskItemUpdate.bind(this)}
                        tasks={this.props.tasks} />
                </Table>
                <Button bsStyle="primary" onClick={this.handleTaskItemAdd.bind(this)}>
                    New Task
                </Button>
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