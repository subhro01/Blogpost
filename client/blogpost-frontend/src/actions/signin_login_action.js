import { NEW_USER, UPDATE_USER } from './types';

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

export const updateLoginUser = (userData) => async dispatch => {
    // TODO: fetch user from the DB
    const fetchUser = await fetch('http://localhost:5000/get_user', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    const response = await fetchUser.json()
    console.log('UPDATE_USER', response);
    dispatch({
        type: UPDATE_USER, 
        payload: response
    })
}