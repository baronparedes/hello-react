import React from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap/lib'
import TaskList from './TaskList'
import _ from 'lodash'

const data = [
    { id: "1", name: "Week 1 Task", description: "Week 1 Task Description", priority: 1, status: "Done" },
    { id: "2", name: "Week 2 Task", description: "Week 2 Task Description", priority: 2, status: "In Progress" },
    { id: "3", name: "Week 3 Task", description: "Week 3 Task Description", priority: 3, status: "TODO" }
]

export default class TaskGrid extends React.Component {
    constructor(props) {
        super(props)

        this.handleTaskItemDelete = this.handleTaskItemDelete.bind(this);
        this.handleTaskItemUpdate = this.handleTaskItemUpdate.bind(this);
        this.handleTaskItemAdd = this.handleTaskItemAdd.bind(this);
        this.generateId = this.generateId.bind(this);

        this.state = {
            tasks: data
        }
    }
    handleTaskItemDelete(item) {
        let index = this.state.tasks.indexOf(item);
        this.state.tasks.splice(index, 1);
        this.setState(this.state.tasks);
    }
    handleTaskItemUpdate(item) {
        // let tasks = this.state.tasks.slice();
        // let newTasks = tasks.map(function (task) {
        //     for (let key in tasks) {
        //         if (task.id == item.id) {
        //             task[key] = item.value;
        //         }
        //     }
        //     return task;
        // });
        // this.setState({ tasks: newTasks });
    }
    handleTaskItemAdd() {
        var id = this.generateId();
        var task = {
            id: id,
            name: '',
            description: '',
            status: 'TODO',
            priority: 1,
            isNew: true
        }
        this.state.tasks.push(task);
        this.setState({ tasks: this.state.tasks });
    }
    generateId() {
        var max = _.maxBy(this.state.tasks, function (d) {
            return d.id;
        });
        return max.id + 1;
    }
    render() {
        return (
            <div className="taskgrid-container">
                <Button bsStyle="primary" onClick={this.handleTaskItemAdd}>
                    <i className="fa fa-plus"></i>
                </Button>
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
                        onTaskItemDelete={this.handleTaskItemDelete}
                        onTaskItemUpdate={this.handleTaskItemUpdate}
                        tasks={this.state.tasks} />
                </Table>
            </div>
        );
    }
}