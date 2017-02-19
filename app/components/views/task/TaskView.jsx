'use strict';

import React from 'react';
import PageContainer from '../../layout/PageContainer'
import TaskContainer from './TaskContainer'
import { Panel } from 'react-bootstrap/lib'

export default class TaskView extends React.Component {
    render() {
        let headerHtml = <h1>Task Master List</h1>;
        return (
            <PageContainer>
                <Panel header={headerHtml} bsStyle="custom">
                    <TaskContainer/>
                </Panel>
            </PageContainer>
        );
    }
}