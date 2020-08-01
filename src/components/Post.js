import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchComments } from './actions/commentsActions';
import { deletePost } from './actions/postsActions'
import PostInfo from './PostInfo';
import PostComments from './PostComments';

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
        <div>
            <button onClick={() => history.goBack()}>to Posts..</button>
            { post && <PostInfo post={post} onEdit={onEdit} setOnEdit={setOnEdit} /> }
            <button onClick={handleDeletePost}>Delete</button>
            <button onClick={() => setOnEdit(!onEdit)}>{onEdit ? 'Close' : 'Edit' }</button>
            {postComments}
        </div>
    )
}

export default Post;