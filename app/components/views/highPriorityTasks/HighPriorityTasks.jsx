import React from 'react';
import * as enums from '../../../core/enums'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap/lib'
import { browserHistory } from 'react-router'

export default class HighPriorityTasks extends React.Component {
    static propTypes = {
        tasks: React.PropTypes.array.isRequired,
        onSelectActiveTask: React.PropTypes.func.isRequired
    }
    handleTaskClick(task){
        this.props.onSelectActiveTask(task);
    }
    redirectToTasks() {
        browserHistory.push("/tasks");
    }
    renderTasks() {
        if (this.props.tasks.length === 0) {
            return <ListGroupItem>No High Priority Tasks</ListGroupItem>
        }
        return this.props.tasks.map((task) => {
            const header = 
                <h2>
                    <Button bsStyle="link" 
                        onClick={this.handleTaskClick.bind(this, task)}>
                        {task.name}
                    </Button>
                </h2>;

            return (
                <ListGroupItem 
                    key={task.id} 
                    header={header}>
                    {task.description}
                </ListGroupItem>
            )
        })
    }
    render() {
        return (
            <ListGroup>
                <ListGroupItem bsStyle="info">
                    <Button bsStyle="primary" block onClick={this.redirectToTasks.bind(this)}>View All Tasks</Button>
                </ListGroupItem>
                {this.renderTasks()}
            </ListGroup>
        );
    }
}