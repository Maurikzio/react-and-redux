import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchComments } from './actions/commentsActions';
import PostInfo from './PostInfo';
import PostComments from './PostComments';

const Post = () => {
    const { id } = useParams();
    const post = useSelector(state => state.posts.posts.find(post => post.id === Number(id)));
    const { comments, fetching, error} = useSelector(state => state.comments);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComments(id));
    }, [id])

    let content; 


    if(error){
        content = <p>Oops {error}</p>
    }else if(fetching){
        content = <p>Loading comments...</p>
    }else{
        content = <PostComments comments={comments}/>
    }

    // console.log(post);

    return (
        <div>
            { post && <PostInfo post={post}/> }
            {content}
        </div>
    )
}

export default Post;