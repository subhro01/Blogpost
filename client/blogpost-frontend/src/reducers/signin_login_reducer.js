import { NEW_USER, UPDATE_USER } from '../actions/types';

const intialState = {
    new_user: {},
    loggedin_user: {}
}

export default function(state = intialState, action) {
    switch(action.type) {
        case NEW_USER:
            return {
                ...state,
                new_user: action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                loggedin_user: action.payload
            }
        default: return state
    }
}