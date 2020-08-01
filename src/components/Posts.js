import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, useRouteMatch, useParams, Switch } from 'react-router-dom';
import { fetchPosts } from './actions/postsActions';

import Post from './Post';
import PostsList from './PostsList';

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
        content = <p>Oops {error}</p>
    }else if(fetching){
        content = <p>Loading posts...</p>
    }else{
        content = <PostsList posts={posts} url={url} userId={id} history={history}/>
    }
    
    return (
        <div>
            <Switch>
                <Route exact path={path} component={() => <>{content}</>}/>
                <Route path={`${path}/:id`}>
                    <Post history={history}/>
                </Route>
            </Switch>
            {/* <p>{JSON.stringify(newPost, null, 2)}</p> */}
        </div>
    )
}

export default Posts;







