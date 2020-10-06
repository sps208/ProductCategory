const initialState = null

export default ( state = initialState, action) => {
    switch(action.type) {
        case 'SET_ACTIVE_CATEGORY':
            return action.payload
        default:
            return state
    }
}