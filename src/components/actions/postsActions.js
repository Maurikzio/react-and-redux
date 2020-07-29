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