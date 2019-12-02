import { NEW_USER, UPDATE_USER } from './types';
import axios from 'axios';
export const createNewUser = (userData) => async dispatch => {
    // TODO: add a new user to DB
    const response = await axios.post('/api/register', userData);
    dispatch({
        type: NEW_USER,
        payload: response.data
    })
}

export const updateLoginUser = (userData, scheme) => async dispatch => {
    console.log(scheme);
    if(scheme === 'google') {
        // TODO: fetch user from the DB
        const fetchedUser = await axios.get('/auth/google');
        dispatch({
            type: UPDATE_USER, 
            payload: fetchedUser.data
        })
    } else {
        // TODO: fetch user from the DB
        const fetchedUser = await axios.post('/api/login', userData);
        dispatch({
            type: UPDATE_USER, 
            payload: fetchedUser.data
        })
    }
}