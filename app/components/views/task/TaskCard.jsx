import React from 'react';
import { Button, Well } from 'react-bootstrap/lib'
import SelectTaskButtonContainer from './SelectTaskButtonContainer'
import * as h from '../../../core/helpers'

const TaskCard = (props) => {
    let selectButton = null;
    if (props.selectable === true) {
        selectButton = <SelectTaskButtonContainer task={props.task} />;
    }
    return (
        <Well bsSize="sm" className={"thumbnail " + props.className}>
            <h2>
                <div>
                    {selectButton}
                    <span className="spacer" />
                    {props.task.name}
                </div>
            </h2>
            <p>{props.task.description}</p>
            <h5>
                Elapsed Time: { h.format(props.task.elapsedTime) }
            </h5>
        </Well>
    );
};

export default TaskCard;