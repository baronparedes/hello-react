import React, { Component } from 'react';
import { Button } from 'react-bootstrap/lib'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as tasksAction from '../../../actions/tasksActions'

class SelectTaskButtonContainer extends Component {
    selectTask(e) {
        e.preventDefault();
        this.props.dispatch(tasksAction.selectTask(this.props.task));
        browserHistory.push("/");
    }
    render() {
        return (
            <Button bsStyle="warning" onClick={this.selectTask.bind(this)}><i className="fa fa-clock-o"></i></Button>
        );
    }
}

export default connect()(SelectTaskButtonContainer)