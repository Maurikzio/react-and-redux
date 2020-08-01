import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchComments } from './actions/commentsActions';
import PostInfo from './PostInfo';
import PostComments from './PostComments';

const Post = ({handleDeletePost, handleEditPost, history}) => {
    const { id } = useParams();
    const post = useSelector(state => state.posts.posts.find(post => post.id === Number(id)));
    const { comments, fetching, error} = useSelector(state => state.comments);
    const [ onEdit, setOnEdit ] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComments(id));
    }, [id])


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
            { post && <PostInfo post={post} onEdit={onEdit} handleEditPost={handleEditPost} setOnEdit={setOnEdit} /> }
            <button onClick={() => {handleDeletePost(post.id); history.goBack()}}>Delete</button>
            <button onClick={() => setOnEdit(true)}>Edit</button>
            {postComments}
        </div>
    )
}

export default Post;