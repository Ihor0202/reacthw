import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slice/userSlice";
import UsersComponent from "../components/UsersComponent";

const UsersPage = () => {

    let dispatch = useAppDispatch()

    let {users} = useAppSelector(state => state.userStore)

    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, []);
    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;