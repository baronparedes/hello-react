import { combineReducers } from 'redux'
import tasks from './tasksReducer'
import highPriorityTasks from './highPriorityTasksReducer'

export default combineReducers({
    tasks,
    highPriorityTasks
});