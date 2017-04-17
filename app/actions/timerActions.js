import * as actions from '../core/actions'
import * as tasksActions from './tasksActions'

let timer = null

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

export function resetTimer() {
    return {
        type: actions.TIMER_ACTIONS.TIMER_RESET,
        payload: {}
    }
}

export function startTimer() {
    return (dispatch) => {
        clearInterval(timer);
        timer = setInterval(() => dispatch(tick()), 1000)
        dispatch({
            type: actions.TIMER_ACTIONS.TIMER_START, payload: {}
        })
        dispatch(tick());
    }
}

export function stopTimer() {
    clearInterval(timer);
    return {
        type: actions.TIMER_ACTIONS.TIMER_STOP,
        payload: {}
    }
}

export function tick() {
    return (dispatch, getState) => {
        const selectedTask = getState().selectedTask;
        dispatch({
            type: actions.TIMER_ACTIONS.TIMER_TICK,
            payload: {
                timeLeft: getState().timer.timeLeft,
                elapsedTime: (selectedTask === null) ? null : selectedTask.elapsedTime
            },
        })
        if (selectedTask !== null) {
            dispatch(tasksActions.updateTask({
                ...selectedTask,
                elapsedTime: selectedTask.elapsedTime + 1
            }));
        }
    }
}