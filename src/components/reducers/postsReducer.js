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
    }
    return state;
}
