import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../actions/commentsActions';
import { deletePost } from '../actions/postsActions'
import PostInfo from './PostInfo';
import PostComments from './PostComments';

import './post-styles.css';

const Post = ({ history}) => {
    const { id } = useParams();
    const post = useSelector(state => state.posts.posts.find(post => post.id === Number(id)));
    const { comments, fetching, error} = useSelector(state => state.comments);
    const [ onEdit, setOnEdit ] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComments(id));
    }, [id])

    const handleDeletePost = () => {
        dispatch(deletePost(post.id))
        history.goBack()
    }  

    if(!post || fetching){
        return <div className='post__message'><p>Loading post info..</p></div>
    }
    return (
        <div className='post'>
            <button className='post__backBtn' onClick={() => history.goBack()}>&#60; back to Posts</button>
            <PostInfo post={post} onEdit={onEdit} setOnEdit={setOnEdit}/> 
            <div className='post__controls'>
                <button className='post__btn deleteBtn' onClick={handleDeletePost}>Delete</button>
                <button className='post__btn editBtn' onClick={() => setOnEdit(!onEdit)}>{onEdit ? 'Cancel' : 'Edit' }</button>
            </div>
            <div className='comments'>
                <PostComments comments={comments}/>
            </div>
        </div>
    )
}

export default Post;