import { combineReducers } from 'redux';
import postReducer from './postReducer';
import signin_login_reducer from './signin_login_reducer';

export default combineReducers({
    posts: postReducer,
    logged: signin_login_reducer
});