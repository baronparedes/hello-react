'use strict';

import React from 'react';
import PageContainer from '../../layout/PageContainer'
import TaskGrid from './TaskGrid'
import { Panel } from 'react-bootstrap/lib'

export default class TaskView extends React.Component {
    render() {
        let headerHtml = <h1>Task Master List</h1>;
        return (
            <PageContainer>
                <Panel header={headerHtml} bsStyle="custom">
                    <TaskGrid/>
                </Panel>
            </PageContainer>
        );
    }
}