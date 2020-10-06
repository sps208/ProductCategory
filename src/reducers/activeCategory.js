const initialState = null

export default ( state = initialState, action) => {
    switch(action.type) {
        case 'SET_ACTIVE_CATEGORY': {
            if(action.payload == state) {
                return null;
            }
            return action.payload;
        }
        default:
            return state;
    }
}