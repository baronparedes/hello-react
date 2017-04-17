import React from 'react';
import { Button } from 'react-bootstrap/lib'
import { browserHistory } from 'react-router'

function redirectToTasks(e){
    e.preventDefault();
    browserHistory.push("/tasks");
}

const RedirectToTasksButton = (props) => {
    return (
        <Button {...props} bsStyle="primary" block onClick={redirectToTasks}>
            {!!props.title ? props.title : "View All Tasks"}
        </Button>
    );
};

export default RedirectToTasksButton;