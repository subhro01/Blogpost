import { LOGOUT_USER } from './types';
import axios from 'axios';
export const logoutUser = () => async dispatch => {
    // TODO: add a new user to DB
    const response = await axios.post('/api/logout');
    dispatch({
        type: LOGOUT_USER,
        payload: response.data
    })
}

