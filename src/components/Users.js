import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './actions/usersActions';

const Users = () => {
    const {users, fetching, error } = useSelector(state => state.users);
    const dispatch = useDispatch()
    let content;

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    
    if(error){
        content = <p>{error}</p>
    }else if(fetching){
        content = <p>Loading users...</p>
    }else{
        content = <ul>{users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}</ul>
    }


    return( 
        <div>
            {content}
        </div>
    )
}

export default Users;