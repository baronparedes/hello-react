import * as actions from '../core/actions'

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

export function addTask(task = null){
    return{
        type: actions.TASKS_ACTIONS.ADD_TASK,
        payload: task
    }
}

export function updateTask(task){
    return{
        type: actions.TASKS_ACTIONS.UPDATE_TASK,
        payload: task
    }
}