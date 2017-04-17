import * as actions from '../core/actions'
import * as enums from '../core/enums'

const initialState = {
    highPriorityTasks: [],
    highPriorityTasksCount: 0,
    incompleteTasks: [],
    incompleteTasksCount: 0,
}

function setFilteredTasks(state, action) {
    const highPriorityTasks = action.payload
        .filter(task => task.priority == enums.PRIORITY_ENUM.HIGH && task.status != enums.STATUS_ENUM.Done);

    const incompleteTasks = action.payload
        .filter(task => task.status != enums.STATUS_ENUM.Done);

    return {
        ...state,
        highPriorityTasks,
        highPriorityTasksCount: highPriorityTasks.length,
        incompleteTasks,
        incompleteTasksCount: incompleteTasks.length
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.TASKS_ACTIONS.SET_FILTERED_TASKS:
            return setFilteredTasks(state, action);
    }
    return state;
}