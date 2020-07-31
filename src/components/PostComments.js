import React from 'react';

const PostComments = ({comments}) => {
    console.log(comments);
    if(comments.length === 0){
        return <p>No comments yet...</p>
    }else{
        return(
            <ul>
                {
                    comments.map((comment) => (
                        <li key={comment.id}>
                            <p>post id: {comment.postId}</p>
                            <p>comment id: {comment.id}</p>
                            <p>name: {comment.name}</p>
                            <p>email: {comment.email}</p>
                            <p>body: {comment.body}</p>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default PostComments