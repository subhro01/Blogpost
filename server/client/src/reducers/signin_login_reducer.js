import { NEW_USER, UPDATE_USER } from '../actions/types';

const intialState = {
    new_user: {},
    loggedin_user: {},
    is_logged_in: false
}

export default function(state = intialState, action) {
    switch(action.type) {
        case NEW_USER:
            return {
                ...state,
                new_user: action.payload,
                is_logged_in: action.payload === 'User already exists' ? false : true
            }
        case UPDATE_USER:
            return {
                ...state,
                loggedin_user: action.payload,
                is_logged_in: true
            }
        default: return state
    }
}