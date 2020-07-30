import React from 'react';
import './modal-styles.css'

const Modal = ({opened, handleSubmitNewPost, posts, handleNewPostChange, newPost}) => {
    return (
        <div className={'modal'+(opened ? 'open': '')}>
            <form autoComplete='off' onSubmit={handleSubmitNewPost}>
                    <input
                        type='number'
                        name='userId'
                        placeholder='userId'
                        min='1'
                        max={posts.length}
                        value={newPost.userId || ''}
                        onChange={handleNewPostChange}
                    />
                    <input
                        type='text'
                        name='title'
                        placeholder='title'
                        value={newPost.title || ''}
                        onChange={handleNewPostChange}
                    />
                    <input
                        type='text'
                        name='body'
                        placeholder='body'
                        value={newPost.body || ''}
                        onChange={handleNewPostChange}
                    />
                    <button type='submit'>SEND</button>
                </form>
        </div>
    )
}

export default Modal;