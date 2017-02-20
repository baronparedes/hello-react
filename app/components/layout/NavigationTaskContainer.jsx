import React from 'react'
import * as hpTasksAction from '../../actions/highPriorityTasksActions'
import * as tasksAction from '../../actions/tasksActions'
import { connect } from 'react-redux'
import { Nav, NavItem } from 'react-bootstrap/lib'
import NavigationHighPriorityTasks from './NavigationHighPriorityTasks';
import TaskItemCreator from '../views/task/TaskItemCreator'

class NavigationTaskContainer extends React.Component {
    componentWillMount() {
        this.props.dispatch(tasksAction.fetchTasks());
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.tasks !== this.props.tasks) {
            this.props.dispatch(hpTasksAction.setHighPriorityTasks(nextProps.tasks));
        }
    }
    selectActiveTask(task) {
        this.props.dispatch(tasksAction.selectTask(task));
    }
    handleTaskItemUpdate(task) {
        this.props.dispatch(tasksAction.updateTask(task))
    }
    handleTaskItemSaved(task) {
        this.props.dispatch(tasksAction.addTask(task));
    }
    render() {
        return (
            <Nav pullRight>
                <NavItem>
                    <TaskItemCreator bsSize="xsmall" onTaskItemSaved={this.handleTaskItemSaved.bind(this)} />
                </NavItem>
                <NavigationHighPriorityTasks
                    activeTask={this.props.activeTask}
                    highPriorityTasks={this.props.highPriorityTasks}
                    count={this.props.count}
                    onSelectActiveTask={this.selectActiveTask.bind(this)}
                    onTaskItemSaved={this.handleTaskItemUpdate.bind(this)}
                />
            </Nav>
        )
    }
}

export default connect(
    (store) => {
        return {
            tasks: store.tasks.tasks,
            highPriorityTasks: store.highPriorityTasks.tasks,
            count: store.highPriorityTasks.count,
            activeTask: store.activeTask
        }
    }
)(NavigationTaskContainer)