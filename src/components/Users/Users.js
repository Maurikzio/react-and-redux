import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/usersActions';

import './users-styles.css';


const Users = () => {
    const {users, fetching, error } = useSelector(state => state.users);
    const dispatch = useDispatch()
    let content;

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    
    if(error){
        content = <p className='users__message'>{error}</p>
    }else if(fetching){
        content = <p className='users__message'>Loading users...</p>
    }else{
        content = 
            <table className='users__table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>
                                    <Link to={`/${user.id}`}>posts</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    }
    
    {/* <li key={user.id}>{user.name} {'-->>'} <Link to={`/${user.id}`}>posts</Link></li> */}

    return( 
        <div className='users'>{content}</div>
    )
}

export default Users;