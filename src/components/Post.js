import React from 'react';

const Post = (props) => {
    return (
        <div>
            comments for post number:  {props.match.params.id}
        </div>
    )
}

export default Post;