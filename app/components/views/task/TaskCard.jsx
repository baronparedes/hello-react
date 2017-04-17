import React from 'react';
import { Button, Well } from 'react-bootstrap/lib'
import SelectTaskButtonContainer from './SelectTaskButtonContainer'

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
        </Well>
    );
};

export default TaskCard;