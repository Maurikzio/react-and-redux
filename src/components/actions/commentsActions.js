import axios from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com';

export const fetchComments = (postId) => {
    return (dispacth) => {
        dispacth({ type: 'FETCH_COMMENTS'})
    
        axios
        .get(BASE+`/comments?postId=${postId}`)
        .then((response) => {
            dispacth({ type: 'FETCH_COMMENTS_FULFILLED', payload: response.data})
        })
        .catch((err) => {
            dispacth({ type: 'FETCH_COMMENTS_REJECTED', payload: err.message})
        })
    }
}