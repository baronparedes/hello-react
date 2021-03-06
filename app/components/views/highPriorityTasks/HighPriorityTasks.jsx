import React from 'react';
import * as enums from '../../../core/enums'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap/lib'
import { browserHistory } from 'react-router'
import RedirectToTasksButton from '../task/RedirectToTasksButton'
import SelectTaskButtonContainer from '../task/SelectTaskButtonContainer'

export default class HighPriorityTasks extends React.Component {
    static propTypes = {
        onSelectActiveTask: React.PropTypes.func.isRequired
    }
    handleTaskClick(task){
        this.props.onSelectActiveTask(task);
    }
    renderTasks() {
        if (!!!this.props.tasks || this.props.tasks.length === 0) {
            return <ListGroupItem>No High Priority Tasks</ListGroupItem>
        }
        return this.props.tasks.map((task) => {
            const header = 
                <div>
                    <SelectTaskButtonContainer task={task} />
                    <Button bsStyle="link" 
                        onClick={this.handleTaskClick.bind(this, task)}>
                        {task.name}
                    </Button>
                </div>;

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
            <ListGroup className="tasks-hp-container pre-scrollable">
                <ListGroupItem bsStyle="info">
                    <RedirectToTasksButton />
                </ListGroupItem>
                {this.renderTasks()}
            </ListGroup>
        );
    }
}