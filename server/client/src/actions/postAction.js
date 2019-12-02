import { FETCH_POST, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POST,
            payload: posts.slice(0, 10)
        }))
        .catch(err => console.log('FETCH FAILED ' + err))
}

export const createPost = (postData) => async dispatch => {
    const post = await axios.post('/api/create_post', postData);
    dispatch({
        type: NEW_POST,
        payload: post.data
    })
    
}