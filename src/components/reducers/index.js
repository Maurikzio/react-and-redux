import { combineReducers } from 'redux';

import posts from './postsReducer';
import users from './usersReducer';
import comments from './commentsReducer';

export default combineReducers({
    posts,
    users,
    comments
});