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
                userId,
                title,
                body 
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

export const deletePost = (id) => {
    return (dispatch) => {
        dispatch({type: 'DELETE_POST'})
        axios(BASE+'/posts/'+id,{
            method: 'DELETE'
        })
        .then((result) => {
            console.log(result)
            dispatch({type: 'DELETE_POST_SUCCESS', payload: id})
        })
        .catch((error) => {
            console.log(error.message);
            dispatch({ type: 'DELETE_POST_FAILURE', payload: error})
        })
    }
}

export const editPost = (post) => {
    // const data = {
    //     userId: post.userId,
    //     id: post.id,
    //     title: post.title,
    //     body: post.body
    // }
    return (dispatch) => {
        dispatch({ type: 'EDIT_POST'})

        axios(BASE+'/posts/'+post.id,{
            method: 'PUT',
            data: JSON.stringify(post),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => {
            console.log('Success!')
            console.log(response.data);
            dispatch({ type: 'EDIT_POST_SUCCESS', payload: response.data})
        })
        .catch((error) => {
            console.log('Fail!')
            console.log(error.message);
            dispatch({ type: 'EDIT_POST_FAILURE', payload: error.message})
        })
    }
}