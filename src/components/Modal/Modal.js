import React from 'react';
import './modal-styles.css'

const Modal = ({opened, handleSubmitNewPost, posts, handleNewPostChange, newPost}) => {
    return (
        <div className={'modal '+(opened ? 'open': '')}>
            <h3>New post</h3>
            <form autoComplete='off'>
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
                    <button onClick={handleSubmitNewPost} disabled={!newPost.title || !newPost.body } >Submit</button>
            </form>
        </div>
    )
}

export default Modal;