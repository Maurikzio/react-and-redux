import React, { useState } from 'react';

const PostInfo = ({ post: { userId, id, title, body }, onEdit, handleEditPost, setOnEdit}) => {

    const [ postState, setPostState ] =  useState({ userId, id, title, body });

    const handleInputChange = (e) => {
        const { target: { value, name }} = e;
        setPostState({
            ...postState,
            [name]: value
        })
    }

    // console.log(postState);
    const handleEdit = () => {
        handleEditPost(postState)
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
            {onEdit && <button onClick={handleEdit}>Update</button>}
        </div>
    )
}

export default PostInfo;