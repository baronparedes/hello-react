import * as actions from '../core/actions'
import * as taskActions from './tasksActions'

export function setHighPriorityTasks(tasks) {
    return {
        type: actions.HIGH_PRIORITY_TASKS_ACTIONS.SET_HIGH_PRIORITY_TASK,
        payload: tasks
    }
}