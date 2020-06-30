import { CHANGE_LOCATION } from '../actions/searchActions';

const initialState = {
    data: {},
}

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LOCATION:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

export default searchReducer;