import * as actions from '../core/actions'
import * as enums from '../core/enums'
import * as timerActions from './timerActions'

export function fetchTasks() {
    return {
        type: actions.TASKS_ACTIONS.FETCH_TASK,
        payload: {}
    }
}

export function deleteTask(id) {
    return {
        type: actions.TASKS_ACTIONS.DELETE_TASK,
        payload: id
    }
}

export function addTask(task = null) {
    return {
        type: actions.TASKS_ACTIONS.ADD_TASK,
        payload: task
    }
}

export function updateTask(task) {
    return {
        type: actions.TASKS_ACTIONS.UPDATE_TASK,
        payload: task
    }
}

export function selectTask(task) {
    return (dispatch) => {
        dispatch({
            type: actions.TASKS_ACTIONS.SELECT_TASK,
            payload: task
        })
        dispatch(updateTask({
            ...task,
            status: enums.STATUS_ENUM.InProgress
        }))
    }
}

export function activeTask(task) {
    return {
        type: actions.TASKS_ACTIONS.ACTIVE_TASK,
        payload: task
    }
}

export function completeTask() {
    return (dispatch, getState) => {
        const selectedTask = getState().selectedTask;
        if (selectedTask !== null) {
            dispatch(timerActions.stopTimer());
            dispatch({
                type: actions.TASKS_ACTIONS.UNSELECT_TASK,
                payload: {}
            })
            dispatch(updateTask({
                ...selectedTask,
                status: enums.STATUS_ENUM.Done
            }));
        }
    }
}

export function setFilteredTasks(tasks) {
    return {
        type: actions.TASKS_ACTIONS.SET_FILTERED_TASKS,
        payload: tasks
    }
}
