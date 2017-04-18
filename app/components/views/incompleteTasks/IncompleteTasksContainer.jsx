import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap/lib' 
import { connect } from 'react-redux'
import TaskCard from '../task/TaskCard'

class IncompleteTasksContainer extends Component {
    renderTasks() {
        if (!!!this.props.incompleteTasks || this.props.incompleteTasks.length === 0) {
            return <h4>Enjoy your day!</h4>
        }
        return this.props.incompleteTasks.map((task) => {
            return (
                <Col lg={4} md={4} sm={6} key={task.id}>
                    <TaskCard className="todo-task" task={task} selectable />
                </Col>
            )
        })
    }
    render() {
        let headerHtml = <h1>TODO</h1>;
        return (
            <Panel header={headerHtml}>
                <Grid fluid>
                    <Row>
                        {this.renderTasks()}
                    </Row>
                </Grid>
            </Panel>
        );
    }
}

export default connect(
    (store) => {
        return {
            incompleteTasks: store.filteredTasks.incompleteTasks,
        }
    }
)(IncompleteTasksContainer)