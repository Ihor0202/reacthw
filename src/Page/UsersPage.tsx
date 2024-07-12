import React, {useEffect, useState} from 'react';
import {IUsers} from "../model/IUsers";
import {getUsers} from "../servise/api.servise";
import UserComponent from "../component/UserComponent";




const UsersPage = () => {
    const [users, setUsers] = useState<IUsers[]>([])


    useEffect(() => {
        getUsers().then(users => {
            setUsers(users)
        })
    }, [])
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;