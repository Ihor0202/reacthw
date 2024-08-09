import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slice/userSlice";
import {useParams} from "react-router-dom";
import UserInfoComponent from "../components/UserInfoComponent";

const UserPage = () => {

    let {id} = useParams()
    console.log(id)
    let {user}  = useAppSelector(state => state.userStore)

    let dispatch = useAppDispatch()

    useEffect(() => {
        if (id) dispatch(userActions.loadUser(+id))

    }, [id]);


    if (!user) {
        return <div>Loading...</div>; // або інший компонент для відображення під час завантаження
    }

    return (
        <div>
            <UserInfoComponent user={user} />
        </div>
    );
};

export default UserPage;