import { combineReducers } from 'redux'
import tasks from './tasksReducer'
import highPriorityTasks from './highPriorityTasksReducer'
import activeTask from './activeTask'

export default combineReducers({
    activeTask,
    tasks,
    highPriorityTasks
});