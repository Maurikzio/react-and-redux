import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Backdrop from '../Modal/Backdrop';
import Modal from '../Modal/Modal';

import { useDispatch } from 'react-redux'
import { addPost } from '../actions/postsActions';

import './postsList-styles.css';

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

    return (
        <div className='postList'>
            <button  className='postList__backBtn' onClick={() => history.goBack()}> &#60; back to Users</button>
            <table className='postsList__table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <Link to={`${url}/${post.id}`}>Details</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

                
            <button onClick={() => setIsOpen(true)} className='postList__addBtn'>Add new</button>

            {/* <p>{JSON.stringify(newPost, null, 2)}</p> */}
            
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