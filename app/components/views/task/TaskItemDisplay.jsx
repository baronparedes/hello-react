import React from 'react';
import { Button, ButtonGroup, FormControl } from 'react-bootstrap/lib'

export default class TaskItemDisplay extends React.Component {
    static propTypes = {
        task: React.PropTypes.object.isRequired,
        handleTaskItemDeleted: React.PropTypes.func.isRequired,
        toggleEditor: React.PropTypes.func.isRequired
    }
    render() {
        return (
            <tr>
                <td>
                    <h4>{this.props.task.name}</h4>
                    <small>{this.props.task.description}</small>
                </td>
                <td>{this.props.task.priority}</td>
                <td>{this.props.task.status}</td>
                <td>
                    <ButtonGroup>
                        <Button bsStyle="primary" onClick={this.props.toggleEditor}><i className="fa fa-pencil"></i></Button>
                        <Button bsStyle="danger" onClick={this.props.handleTaskItemDeleted}><i className="fa fa-trash"></i></Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
}