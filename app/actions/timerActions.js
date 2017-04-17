import * as actions from '../core/actions'

export function fetchTimerTypes() {
    return {
        type: actions.TIMER_ACTIONS.FETCH_TIMER_TYPES,
        payload: {}
    }
}

export function selectTimer(timer) {
    return {
        type: actions.TIMER_ACTIONS.SELECT_TIMER,
        payload: timer
    }
}