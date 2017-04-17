import * as actions from '../core/actions'
import * as enums from '../core/enums'

function timerTick(state, action){
    return {
        ...state,
        elapsedTime: state.elapsedTime++
    }
}

export default function (state = null, action) {
    switch (action.type) {
        case actions.TASKS_ACTIONS.SELECT_TASK:
            return {
                ...state,
                ...action.payload
            }
        case actions.TIMER_ACTIONS.TIMER_TICK:
            return timerTick(state, action);
    }
    return state;
}