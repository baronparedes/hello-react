import React from 'react';
import { Button, ButtonGroup, FormControl } from 'react-bootstrap/lib'
import SelectTaskButtonContainer from './SelectTaskButtonContainer'
import * as enums from '../../../core/enums'
import * as h from '../../../core/helpers'

export default class TaskItemDisplay extends React.Component {
    static propTypes = {
        task: React.PropTypes.object.isRequired,
        handleTaskItemDeleted: React.PropTypes.func.isRequired,
        toggleEditor: React.PropTypes.func.isRequired
    }
    render() {
        let selectButton = null;
        if (this.props.task.status != enums.STATUS_ENUM.Done) {
            selectButton = <SelectTaskButtonContainer task={this.props.task}/>;
        }
        return (
            <tr>
                <td>
                    <h4>{this.props.task.name}</h4>
                    <small>{this.props.task.description}</small>
                </td>
                <td>{h.format(this.props.task.elapsedTime)}</td>
                <td>{this.props.task.priority}</td>
                <td>{this.props.task.status}</td>
                <td>
                    <ButtonGroup>
                        <Button bsStyle="primary" onClick={this.props.toggleEditor}><i className="fa fa-pencil"></i></Button>
                        <Button bsStyle="danger" onClick={this.props.handleTaskItemDeleted}><i className="fa fa-trash"></i></Button>
                        {selectButton}
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
}