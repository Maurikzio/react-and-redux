import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from './Backdrop';
import Modal from './Modal';

const PostsList = ({posts, url}) => {
    const [ newPost, setNewPost ] = useState({});
    const [ isOpen, setIsOpen ] = useState(false);

    const handleNewPostChange = (e) => {
        const { target: { name, value } } = e;
        setNewPost({...newPost, [name]: value})
    }

    const handleSubmitNewPost = (e) => {
        e.preventDefault();
        console.log(newPost);
        setIsOpen(false)
    }
    return (
        <div>
        
            <ul>{posts.map(post => (
                <li key={post.id}>{post.title} {'-->'} 
                    <Link to={`${url}/${post.id}`}>Details</Link>
                </li>
                ))}
            </ul>

                
            <button onClick={() => setIsOpen(true)}>Add new</button>

            <p>{JSON.stringify(newPost, null, 2)}</p>
            
            <Backdrop close={setIsOpen} opened={isOpen}/>
            <Modal 
                opened={isOpen} 
                handleSubmitNewPost={handleSubmitNewPost}
                posts={posts}
                handleNewPostChange={handleNewPostChange}
                newPost={newPost}
            />
        </div>
    )
}

export default PostsList;