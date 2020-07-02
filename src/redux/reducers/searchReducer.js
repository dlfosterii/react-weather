import { CHANGE_LOCATION } from '../actions/searchActions';

const initialState = {
    data: {city: {}, list: []},
}

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LOCATION:
            return {
                ...state,
                data: {city: action.data.city, list: action.data.list}
            }
        default:
            return state
    }
}

export default searchReducer;