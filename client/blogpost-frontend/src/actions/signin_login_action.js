import { NEW_USER, UPDATE_USER } from './types';
import axios from 'axios';
export const createNewUser = (userData) => async dispatch => {
    // TODO: add a new user to DB
    const createUser = await fetch('http://localhost:5000/new_user', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const response = await createUser.json()
    console.log('NEW_USER', response);
    dispatch({
        type: NEW_USER,
        payload: response
    })
}

export const updateLoginUser = (userData, scheme) => async dispatch => {
    console.log(scheme);
    if(scheme === 'google') {
        // TODO: fetch user from the DB
        const fetchedUser = await axios.get('/auth/google')
        dispatch({
            type: UPDATE_USER, 
            payload: fetchedUser.data
        })
    } else {
        // TODO: fetch user from the DB
        const fetchedUser = await axios.get('/api/get_user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        dispatch({
            type: UPDATE_USER, 
            payload: fetchedUser.data
        })
    }
}