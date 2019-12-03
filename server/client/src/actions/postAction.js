import { FETCH_POST, NEW_POST, FETCH_USER_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => async dispatch => {
    const allPosts = await axios.get('/api/all_posts');
    dispatch({
        type: FETCH_POST,
        payload: allPosts.data
    })
}

export const createPost = (postData) => async dispatch => {
    const post = await axios.post('/api/create_post', postData);
    dispatch({
        type: NEW_POST,
        payload: post.data
    })   
}

export const fetchUserPosts = (userId) => async dispatch => {
    const posts = await axios.get('/api/user_posts', userId);
    dispatch({
        type: FETCH_USER_POST,
        payload: posts.data
    })
}