import * as actions from '../core/actions'
import * as enums from '../core/enums'

export default function (state = null, action) {
    switch (action.type) {
        case actions.TASKS_ACTIONS.SELECT_TASK:
            console.log(action.payload)
            return {
                ...state,
                ...action.payload
            }
    }
    return state;
}