import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchComments } from './actions/commentsActions';
import { deletePost } from './actions/postsActions'
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

    let postComments; 

    if(error){
        postComments = <p>Oops {error}</p>
    }else if(fetching){
        postComments = <p>Loading comments...</p>
    }else{
        postComments = <PostComments comments={comments} />
    }

    // console.log(post);    

    return (
        <div className='post'>
            <button onClick={() => history.goBack()}>to Posts..</button>
            {post ? <PostInfo post={post} onEdit={onEdit} setOnEdit={setOnEdit}/> : <p>Loading post info...</p>}
            <div className='post__controls'>
                <button className='post__btn deleteBtn' onClick={handleDeletePost}>Delete</button>
                <button className='post__btn editBtn' onClick={() => setOnEdit(!onEdit)}>{onEdit ? 'Cancel' : 'Edit' }</button>
            </div>
            <div className='comments'>
                <h3>Comments:</h3>
                {postComments}
            </div>
        </div>
    )
}

export default Post;