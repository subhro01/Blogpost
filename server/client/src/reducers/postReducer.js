import { FETCH_POST, NEW_POST, FETCH_USER_POST } from '../actions/types';    

const initialState = {
    items: [],
    item: {},
    user_posts: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POST:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        case FETCH_USER_POST:
            return {
                ...state, 
                user_posts: action.payload
            }
        default: return state;
    }
}