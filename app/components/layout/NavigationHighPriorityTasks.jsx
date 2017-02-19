import React from 'react';
import { NavDropdown } from 'react-bootstrap/lib'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import HighPriorityTasksBadge from '../views/highPriorityTasks/HighPriorityTasksBadge'
import HighPriorityTasks from '../views/highPriorityTasks/HighPriorityTasks'
import { connect } from 'react-redux'
import * as hpTasksAction from '../../actions/highPriorityTasksActions'

class NavigationHighPriorityTasks extends React.Component {
    static propTypes = {
        tasks: React.PropTypes.array.isRequired
    }
    componentWillReceiveProps(nextProps) {
        // if (nextProps.tasks !== this.props.tasks) {
        //     this.props.dispatch(hpTasksAction.setHighPriorityTasks(nextProps.tasks));
        // }
    }
    renderHighPriorityTasksBadge() {
        return (
            <HighPriorityTasksBadge count={this.props.count} />
        );
    }
    render() {
        return (
            <NavDropdown
                eventKey={4}
                title={this.renderHighPriorityTasksBadge()}
                id="tasks-hp-nav-dropdown">
                <HighPriorityTasks tasks={this.props.highPriorityTasks} />
            </NavDropdown>
        );
    }
}

export default connect(
    (store) => {
        return {
            highPriorityTasks: store.highPriorityTasks.tasks,
            count: store.highPriorityTasks.count
        }
    }
)(NavigationHighPriorityTasks)
