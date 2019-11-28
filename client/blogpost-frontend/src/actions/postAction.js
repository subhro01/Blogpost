import { FETCH_POST, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POST,
            payload: posts.slice(0, 10)
        }))
        .catch(err => console.log('FETCH FAILED ' + err))
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(postResp => dispatch({
        type: NEW_POST,
        payload: postResp
    }))
    .catch(err => console.log('err', err));
}