import React from 'react';
import TaskContainer from './TaskContainer'
import { Panel } from 'react-bootstrap/lib'

export default class TaskView extends React.Component {
    render() {
        let headerHtml = <h1>Task Master List</h1>;
        return (
            <div className="container push-bottom">
                <Panel header={headerHtml}>
                    <TaskContainer />
                </Panel>
            </div>
        );
    }
}