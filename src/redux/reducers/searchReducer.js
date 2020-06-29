const initialState = {
    loc: [
        {
            
            
        }
    ]
}

function searchReducer(state = initialState, action) {
    if (action.type === CHANGE_LOCATION) {
        return action.status;
    }
    return state;
}

export default searchReducer;