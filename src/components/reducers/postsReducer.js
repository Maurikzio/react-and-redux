const initialState = {
    posts: [],
    fetching: false, 
    fetched: false, 
    error: null
};

export default function reducer( state=initialState, action){
    switch(action.type){
        case 'FETCH_POSTS': {
            return {
                ...state,
                fetching: true
            }
        }
        case 'FETCH_POSTS_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                posts: action.payload,
            }
        }
        case 'FETCH_POSTS_REJECTED': {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case 'ADD_POST': {
            console.log('adding poooooooost...');
            break;
        }
        case 'ADD_POST_SUCCESS': {
            console.log('success!!');
            console.log(state.posts);
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ]
            }
        }
        case 'ADD_POST_FAILURE': {
            console.log('something went wrong...');
            return {
                ...state, 
                error: action.payload
            }
        }
        case 'DELETE_POST_SUCCESS': {
            const filteredPosts = state.posts.filter((post) => post.id !== action.payload)
            return {
                ...state, 
                posts: filteredPosts
            }
        }
        case 'DELETE_POST_FAILURE': {
            return {
                ...state,
                error: action.payload
            }
        }
        case 'EDIT_POST_SUCCESS':{
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.id){
                        return {...post,title: action.payload.title, body: action.payload.body}
                    }else{
                        return post
                    }
                })
            }
        }
        default:
            return state
    }
    return state;
}
