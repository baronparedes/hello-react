import * as actions from '../core/actions'
import * as enums from '../core/enums'

function timerTick(state, action) {
    if (state === null) return state;
    return {
        ...state,
        elapsedTime: action.payload.elapsedTime + 1
    }
}

export default function (state = null, action) {
    switch (action.type) {
        case actions.TASKS_ACTIONS.SELECT_TASK:
            return {
                ...state,
                ...action.payload
            }
        case actions.TASKS_ACTIONS.UNSELECT_TASK:
            return null;
        case actions.TIMER_ACTIONS.TIMER_TICK:
            return timerTick(state, action);
    }
    return state;
}