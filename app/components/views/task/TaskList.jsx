'use strict';

import React from 'react';
import { Table } from 'react-bootstrap/lib'
import TaskListHeader from './TaskListHeader'
import TaskItems from './TaskItems'

export default class TaskGrid extends React.Component {
    render() {
        return (
            <Table responsive striped bordered condensed hover className="table-custom">
                <TaskListHeader />
                <TaskItems />
            </Table>
        );
    }
}