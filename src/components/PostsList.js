import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Backdrop from './Backdrop';
import Modal from './Modal';

import { useDispatch } from 'react-redux'
import { addPost, deletePost } from './actions/postsActions';

const PostsList = ({posts, url, userId, history}) => {
    const [ newPost, setNewPost ] = useState({});
    const [ isOpen, setIsOpen ] = useState(false);
    const dispatch = useDispatch();

    const handleNewPostChange = (e) => {
        const { target: { name, value } } = e;
        setNewPost({...newPost, [name]: value})
    }

    const handleSubmitNewPost = (e) => {
        e.preventDefault();
        dispatch(addPost({...newPost, userId}))
        setIsOpen(false)
    }

    // const onDeletePost = (postId) => {
    //     dispatch(deletePost(postId))
    //     history.goBack();
    // }

    return (
        <div>
            {/* <button onClick={() => history.goBack()}>back</button> */}
            <ul>{posts.map(post => (
                <li key={post.id}>{post.title} {'-->'} 
                    <Link to={`${url}/${post.id}`}>Details</Link>
                    {/* <button onClick={() => onDeletePost(post.id)}>delete</button> */}
                </li>
                ))}
            </ul>

                
            <button onClick={() => setIsOpen(true)}>Add new</button>

            <p>{JSON.stringify(newPost, null, 2)}</p>
            
            <Backdrop close={setIsOpen} opened={isOpen}/>
            <Modal 
                opened={isOpen} 
                handleSubmitNewPost={handleSubmitNewPost}
                posts={posts}
                handleNewPostChange={handleNewPostChange}
                newPost={newPost}
            />
        </div>
    )
}

export default PostsList;