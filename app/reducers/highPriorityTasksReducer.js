import * as actions from '../core/actions'
import * as enums from '../core/enums'

const initialState = {
    tasks: [],
    count: 0
}

function setHighPriorityTasks(state, action) {
    const highPriorityTasks = action.payload
        .filter(task => task.priority == enums.PRIORITY_ENUM.HIGH);
    return {
        ...state,
        tasks: highPriorityTasks,
        count: highPriorityTasks.length
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.HIGH_PRIORITY_TASKS_ACTIONS.SET_HIGH_PRIORITY_TASK:
            return setHighPriorityTasks(state, action);
    }
    return state;
}