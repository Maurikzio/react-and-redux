import React from 'react';

const Posts = (props) => {
    return (
        <div>
            User id: {props.match.params.id}
        </div>
    )
}

export default Posts;