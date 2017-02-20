import React from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap/lib'
import { connect } from 'react-redux'
import * as tasksActions from '../../../actions/tasksActions'
import TaskItemEditorModal from './TaskItemEditorModal'
import TaskItemCreator from './TaskItemCreator'
import TaskList from './TaskList'

class TaskContainer extends React.Component {
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
    handleTaskItemUpdate(task) {
        this.props.dispatch(tasksActions.updateTask(task));
    }
    render() {
        return (
            <div className="task-grid-container">
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
                <TaskItemCreator onTaskItemSaved={this.handleTaskItemAddFromModal.bind(this)} />
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
)(TaskContainer)