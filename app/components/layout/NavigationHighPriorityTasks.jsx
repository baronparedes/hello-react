import React from 'react';
import { NavDropdown } from 'react-bootstrap/lib'
import HighPriorityTasksBadge from '../views/highPriorityTasks/HighPriorityTasksBadge'
import HighPriorityTasks from '../views/highPriorityTasks/HighPriorityTasks'
import TaskItemEditorModal from '../views/task/TaskItemEditorModal'

export default class NavigationHighPriorityTasks extends React.Component {
    static propTypes = {
        count: React.PropTypes.number.isRequired,
        highPriorityTasks: React.PropTypes.array.isRequired,
        activeTask: React.PropTypes.object.isRequired,
        onSelectActiveTask: React.PropTypes.func.isRequired,
        onTaskItemSaved: React.PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    renderHighPriorityTasksBadge() {
        return (
            <HighPriorityTasksBadge count={this.props.count} />
        );
    }
    toggleModalEditor() {
        this.setState({ showModal: !this.state.showModal });
    }
    handleTaskItemSaved(task){
        this.props.onTaskItemSaved(task);
        this.toggleModalEditor();
    }
    handleSelectActiveTask(task){
        this.props.onSelectActiveTask(task);
        this.toggleModalEditor();
    }
    render() {
        return (
            <NavDropdown
                eventKey={4}
                title={this.renderHighPriorityTasksBadge()}
                id="tasks-hp-nav-dropdown">
                <div className="tasks-hp-container pre-scrollable container">
                    <HighPriorityTasks
                    tasks={this.props.highPriorityTasks}
                    onSelectActiveTask={this.handleSelectActiveTask.bind(this)} />
                </div>
                <TaskItemEditorModal
                    task={this.props.activeTask}
                    showModal={this.state.showModal}
                    onTaskItemSaved={this.handleTaskItemSaved.bind(this)}
                    onToggleModal={this.toggleModalEditor.bind(this)} />
            </NavDropdown>
        );
    }
}