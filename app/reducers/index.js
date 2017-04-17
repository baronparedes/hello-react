import { combineReducers } from 'redux'
import tasks from './tasksReducer'
import filteredTasks from './filteredTasksReducer'
import activeTask from './activeTaskReducer'
import selectedTask from './selectedTaskReducer'
import timer from './timerReducer'

export default combineReducers({
    activeTask,
    selectedTask,
    timer,    
    tasks,
    filteredTasks,
});