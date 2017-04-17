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

export function resetTimer(){
    return {
        type: actions.TIMER_ACTIONS.TIMER_RESET,
        payload: {}
    }
}

export function startTimer(){
    return {
        type: actions.TIMER_ACTIONS.TIMER_START,
        payload: {}
    }
}

export function stopTimer(){
    return {
        type: actions.TIMER_ACTIONS.TIMER_STOP,
        payload: {}
    }
}