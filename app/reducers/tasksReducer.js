import _ from 'lodash'
import * as actions from '../core/actions'
import * as enums from '../core/enums'


const data = [{
        id: "1",
        name: "Week 1 Task",
        description: "Create header, body, and footer react components.",
        priority: enums.PRIORITY_ENUM.LOW,
        status: "Done"
    },
    {
        id: "2",
        name: "Week 2 Task",
        description: "Create a task grid.",
        priority: enums.PRIORITY_ENUM.MEDIUM,
        status: enums.STATUS_ENUM.Done
    },
    {
        id: "3",
        name: "Week 3 Task",
        description: "Update task grid to have CRUD",
        priority: enums.PRIORITY_ENUM.HIGH,
        status: enums.STATUS_ENUM.Done
    },
    {
        id: "4",
        name: "Week 4 Task",
        description: "Update to ES6",
        priority: enums.PRIORITY_ENUM.HIGH,
        status: enums.STATUS_ENUM.Done
    },
    {
        id: "5",
        name: "Week 5 Task",
        description: "Apply FLUX/REDUX",
        priority: enums.PRIORITY_ENUM.HIGH,
        status: enums.STATUS_ENUM.InProgress
    }
]
const initialState = {
    tasks: []
}

function fetchTasks(state, action) {
    return {
        ...state,
        tasks: state.tasks.length === 0 ? data : state.tasks
    }
}

function generateId(list) {
    if (list.length === 0) {
        return 1;
    }
    return _.maxBy(list, 'id').id + 1;
}

function addTask(state, action) {
    let task = {}
    if (action.payload === null) {
        task = {
            id: generateId(state.tasks),
            name: '',
            description: '',
            status: enums.STATUS_ENUM.TODO,
            priority: enums.PRIORITY_ENUM.LOW,
            isNew: true
        }
    }
    else{
        task = {
            ...action.payload,
            id: generateId(state.tasks),
            isNew: false
        }
    }

    return {
        ...state,
        tasks: state.tasks.concat(task)
    }
}

function deleteTask(state, action) {
    return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
    }
}

function updateTask(state, action) {
    return Object.assign({}, state, {
        tasks: state.tasks.map((task, index) => {
            if (task.id === action.payload.id) {
                return Object.assign({}, task, {
                    ...action.payload
                })
            }
            return task;
        })
    });
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.TASKS_ACTIONS.FETCH_TASK:
            return fetchTasks(state, action);
        case actions.TASKS_ACTIONS.ADD_TASK:
            return addTask(state, action);
        case actions.TASKS_ACTIONS.DELETE_TASK:
            return deleteTask(state, action);
        case actions.TASKS_ACTIONS.UPDATE_TASK:
            return updateTask(state, action);
        default:
            return state;
    }
}