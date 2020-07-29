import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './actions/postsActions';

const Posts = (props) => {
    const {posts, fetching, error} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(props.match.params.id))
    }, [])

    let content;

    if(error){
        content = <p>Oops {error}</p>
    }else if(fetching){
        content = <p>Loading posts...</p>
    }else{
        content = <ul>{posts.map(post => (
            <li key={post.id}>{post.title}</li>
        ))}</ul>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Posts;