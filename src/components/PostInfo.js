import React from 'react';

const PostInfo = ({ post: { userId, id, title, body } }) => {
    return(
        <div>
            <p>user id: {userId}</p>
            <p>post id: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    )
}

export default PostInfo;