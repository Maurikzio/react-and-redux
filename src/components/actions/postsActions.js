import axios from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = (userId) => {
    return (dispacth) => {
        dispacth({ type: 'FETCH_POSTS'})
    
        axios
        .get(BASE+`/posts?userId=${userId}`)
        .then((response) => {
            dispacth({ type: 'FETCH_POSTS_FULFILLED', payload: response.data})
        })
        .catch((err) => {
            dispacth({ type: 'FETCH_POSTS_REJECTED', payload: err.message})
        })
    }
}

export const addPost = ({title, body, userId}) => {
    return (dispatch) => {
        dispatch({type: 'ADD_POST'});

        axios(BASE+'/posts', {
            method: 'POST',
            data: JSON.stringify({
                title,
                body, 
                userId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        .then((response) => {
            dispatch({type: 'ADD_POST_SUCCESS', payload: response.data})
        })
        .catch((error) => {
            dispatch({ type: 'ADD_POST_FAILURE', payload: error})
        })
    }
}