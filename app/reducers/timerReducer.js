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
    timeLeft: timerTypes.find(_ => _.type === enums.TIMER_TYPE_ENUM.Promodoro).interval,
    ticking: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.TIMER_ACTIONS.SELECT_TIMER:
            return {
                ...state,
                selectedTimer: action.payload,
                timeLeft: action.payload.interval
            }
        case actions.TIMER_ACTIONS.TIMER_TICK:
            return {
                ...state,
                timeLeft: (state.timeLeft === 0) ? 0 : state.timeLeft--
            }
        case actions.TIMER_ACTIONS.TIMER_RESET:
            return {
                ...state,
                timeLeft: state.selectedTimer.interval
            }
        case actions.TIMER_ACTIONS.TIMER_START:
            return {
                ...state,
                ticking: true
            }
        case actions.TIMER_ACTIONS.TIMER_STOP:
            return {
                ...state,
                ticking: false
            }
        default:
            return state;
    }
}