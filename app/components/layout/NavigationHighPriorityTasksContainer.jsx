import React from 'react'
import * as hpTasksAction from '../../actions/highPriorityTasksActions'
import * as tasksAction from '../../actions/tasksActions'
import { connect } from 'react-redux'
import NavigationHighPriorityTasks from './NavigationHighPriorityTasks';

class NavigationHighPriorityTasksContainer extends React.Component {
    componentWillMount() {
        this.props.dispatch(tasksAction.fetchTasks());
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.tasks !== this.props.tasks) {
            this.props.dispatch(hpTasksAction.setHighPriorityTasks(nextProps.tasks));
        }
    }
    selectActiveTask(task){
        this.props.dispatch(tasksAction.selectTask(task));
    }
    updateTask(task){
        this.props.dispatch(tasksAction.updateTask(task))
    }
    render() {
        return (
            <NavigationHighPriorityTasks 
                activeTask={this.props.activeTask}
                onSelectActiveTask={this.selectActiveTask.bind(this)}
                onTaskItemSaved={this.updateTask.bind(this)}
                highPriorityTasks={this.props.highPriorityTasks} 
                count={this.props.count} />
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
)(NavigationHighPriorityTasksContainer)