import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import reducers from './reducers'
import thunk from 'redux-thunk'
import hpTasksAction from './actions/highPriorityTasksActions'

const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducers, middleware);

export default store;