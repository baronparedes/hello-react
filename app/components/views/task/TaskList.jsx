'use strict';

import React from 'react';
import { Table } from 'react-bootstrap/lib'
import TaskListHeader from './TaskListHeader'
import TaskItems from './TaskItems'

export default class TaskGrid extends React.Component {
    render() {
        var week1TaskItem = {id: "1", name: "Week 1 Task", description: "Week 1 Task Description", priority: 1, status: "Done"};
        var week2TaskItem = {id: "2", name: "Week 2 Task", description: "Week 2 Task Description", priority: 1, status: "In Progress"};
        var week3TaskItem = {id: "3", name: "Week 3 Task", description: "Week 3 Task Description", priority: 1, status: "TODO"};
        var data = [week1TaskItem, week2TaskItem, week3TaskItem];
        return (
            <Table responsive striped bordered condensed hover className="table-custom">
                <TaskListHeader />
                <TaskItems tasks={data} />
            </Table>
        );
    }
}