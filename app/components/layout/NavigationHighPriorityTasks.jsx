import React from 'react';
import { NavDropdown } from 'react-bootstrap/lib'
import HighPriorityTasksBadge from '../views/highPriorityTasks/HighPriorityTasksBadge'
import HighPriorityTasks from '../views/highPriorityTasks/HighPriorityTasks'
import TaskItemEditorModal from '../views/task/TaskItemEditorModal'

export default class NavigationHighPriorityTasks extends React.Component {
    static propTypes = {
        activeTask: React.PropTypes.object.isRequired,
        onActiveTask: React.PropTypes.func.isRequired,
        onTaskItemSaved: React.PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    toggleModalEditor() {
        this.setState({ showModal: !this.state.showModal });
    }
    handleTaskItemSaved(task) {
        this.props.onTaskItemSaved(task);
        this.toggleModalEditor();
    }
    handleActiveTask(task) {
        this.props.onActiveTask(task);
        this.toggleModalEditor();
    }
    render() {
        const header = <HighPriorityTasksBadge count={this.props.count} />;
        return (
            <NavDropdown
                eventKey={4}
                title={header}
                id="tasks-hp-nav-dropdown">
                <HighPriorityTasks
                    tasks={this.props.highPriorityTasks}
                    onSelectActiveTask={this.handleActiveTask.bind(this)} />
                <TaskItemEditorModal
                    task={this.props.activeTask}
                    showModal={this.state.showModal}
                    onTaskItemSaved={this.handleTaskItemSaved.bind(this)}
                    onToggleModal={this.toggleModalEditor.bind(this)} />
            </NavDropdown>
        );
    }
}