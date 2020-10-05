const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY_LIST':
            return action.payload;
        default:
            return state;
    }
}