import React, { useState, useEffect } from 'react';
import { editPost } from '../actions/postsActions';
import { useDispatch } from 'react-redux';

import './postInfo-styles.css';

const PostInfo = ({ post, onEdit, setOnEdit}) => {
    // console.log(post);
    const [ postState, setPostState ] =  useState({});
    const dispacth = useDispatch();

    useEffect(() => {
        setPostState({...post})
    }, [])

    const handleInputChange = (e) => {
        const { target: { value, name }} = e;
        setPostState({
            ...postState,
            [name]: value
        })
    }
    
    const handleEditPost = () => {
        dispacth(editPost(postState))
        setOnEdit(false);
    }

    return(
        <div className='postInfo'>
            <h3>Post information</h3>
            <p><strong>user id:</strong> {postState.userId}</p>
            <p><strong>post id:</strong> {postState.id}</p>
            <div className='postInfo__controls'>
                <div className='postinfo__editors'>
                    {onEdit ? ( 
                        <div className='postInfo__field'>
                            <label>
                                <strong>title:</strong>
                            </label>
                            <input
                                type='text'
                                name='title'
                                value={postState.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        
                            ) : ( <p><strong>title:</strong> {postState.title}</p> )}
                    {onEdit ? ( 
                        <div className='postInfo__field'>
                        <label>
                            <strong>body:</strong>
                        </label>
                            <input
                                type='text'
                                name='body'
                                value={postState.body}
                                onChange={handleInputChange}
                            />
                        </div>
                            ) : ( <p><strong>body:</strong> {postState.body}</p> )}
                </div>
                <button className={`postInfo__updateBtn `+ (onEdit ? 'open' : '')}  onClick={handleEditPost}>Update</button>
            </div>
        </div>
    )
    
}

export default PostInfo;