import {REGION} from './actionTypes'

const initialState = {
    itemClock: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGION:
        return {
            ...state,
            itemClock: action.itemClock
        }
        default:
        return state;
    }
}
export default reducer;