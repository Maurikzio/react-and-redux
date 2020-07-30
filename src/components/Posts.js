import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Link, useRouteMatch, useParams, Switch } from 'react-router-dom';
import { fetchPosts } from './actions/postsActions';

import Post from './Post';

const Posts = () => {
    // const { path, url} = useRouteMatch();
    
    const {posts, fetching, error} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const { path, url} = useRouteMatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchPosts(id))
    }, [id])

    let content;

    if(error){
        content = <p>Oops {error}</p>
    }else if(fetching){
        content = <p>Loading posts...</p>
    }else{
        content = <ul>{posts.map(post => (
            <li key={post.id}>{post.title} {'-->'} 
                <Link to={`${url}/${post.id}`}>Details</Link>
            </li>
        ))}</ul>
    }
    

    return (
        <div>
            <Switch>
                <Route exact path={path} component={() => <>{content}</>}/>
                <Route path={`${path}/:id`} component={Post}/>
            </Switch>
        </div>
    )
}

export default Posts;







