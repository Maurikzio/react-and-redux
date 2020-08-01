import React, { useState } from 'react';
import { editPost } from './actions/postsActions';
import { useDispatch } from 'react-redux';


const PostInfo = ({ post: { userId, id, title, body }, onEdit, setOnEdit}) => {

    const [ postState, setPostState ] =  useState({ userId, id, title, body });
    const dispacth = useDispatch();

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
        <div>
            <p>user id: {userId}</p>
            <p>post id: {id}</p>
            <div style={{display:'flex', flexDirection:'column'}}>
                {onEdit ? ( 
                    <label>
                        title:
                        <input
                            type='text'
                            name='title'
                            value={postState.title}
                            onChange={handleInputChange}
                        />
                    </label>
                        ) : ( <p>title: {title}</p> )}
                {onEdit ? ( 
                    <label>
                        body:
                        <input
                            type='text'
                            name='body'
                            value={postState.body}
                            onChange={handleInputChange}
                        />
                    </label>
                        ) : ( <p>body: {body}</p> )}
            </div>
            {onEdit && <button onClick={handleEditPost}>Update</button>}
        </div>
    )
}

export default PostInfo;