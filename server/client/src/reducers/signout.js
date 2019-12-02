import { LOGOUT_USER } from '../actions/types';

const intialState = {
    logout: ''
}

export default function(state = intialState, action) {
    switch(action.type) {
        case LOGOUT_USER: 
            return {
                ...state,
                logout: action.payload
            }
        default: return state
    }
}