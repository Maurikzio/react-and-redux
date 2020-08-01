import React from 'react';

import './postComments-styles.css';

const PostComments = ({comments}) => {
        return(
            <div>
            <h3>Comments:</h3>
            <ul className='postComments'>
                {
                    comments.map((comment) => (
                        <li key={comment.id}>
                            <p><strong>Post id:</strong> {comment.postId}</p>
                            <p><strong>Comment id:</strong> {comment.id}</p>
                            <p><strong>Name:</strong> {comment.name}</p>
                            <p><strong>Email:</strong> {comment.email}</p>
                            <p><strong>Body:</strong> {comment.body}</p>
                        </li>
                    ))
                }
            </ul>
            </div>
        )
    // }
}

export default PostComments