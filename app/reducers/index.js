import { combineReducers } from 'redux'
import tasks from './tasksReducer'
import filteredTasks from './filteredTasksReducer'
import activeTask from './activeTaskReducer'
import selectedTask from './selectedTaskReducer'

export default combineReducers({
    activeTask,
    selectedTask,
    tasks,
    filteredTasks
});