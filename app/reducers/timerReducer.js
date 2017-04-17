import * as actions from '../core/actions'
import * as enums from '../core/enums'

const timerTypes = [
    {
        type: enums.TIMER_TYPE_ENUM.Promodoro,
        interval: 1500,
    },
    {
        type: enums.TIMER_TYPE_ENUM.ShortBreak,
        interval: 300,
    },
    {
        type: enums.TIMER_TYPE_ENUM.LongBreak,
        interval: 900,
    }
]

const initialState = {
    timerTypes,
    selectedTimer: timerTypes.find(_ => _.type === enums.TIMER_TYPE_ENUM.Promodoro),
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.TIMER_ACTIONS.SELECT_TIMER:
            return {
                ...state,
                selectedTimer: action.payload
            }
        default:
            return state;
    }
}