'use strict';

import React from 'react';

export default class TaskListHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Task Details</th>
                    <th>Priority</th>
                    <th>Status</th>
                </tr>
            </thead>
        );
    }
}