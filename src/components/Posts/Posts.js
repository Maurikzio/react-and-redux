import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, useRouteMatch, useParams, Switch } from 'react-router-dom';
import { fetchPosts } from '../actions/postsActions';

import Post from '../Post/Post';
import PostsList from './PostsList';

import './posts-styles.css'

const Posts = ({history}) => {
    const {posts, fetching, error} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const { path, url} = useRouteMatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchPosts(id))
    }, [id])


    let content;

    if(error){
        content = <div><p>Oops {error}</p></div>
    }else if(fetching){
        content = <div className='posts__content'><p>Loading posts...</p></div>
    }else{
        content = <PostsList posts={posts} url={url} userId={id} history={history}/>
    }
    
    return (
        <div className='posts'>
            <Switch>
                <Route exact path={path} component={() => <div>{content}</div>}/>
                <Route path={`${path}/:id`}>
                    <Post history={history}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Posts;







