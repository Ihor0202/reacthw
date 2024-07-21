import React, {FC} from 'react';
import {IUsers} from "../model/IUsers";
import {Link} from "react-router-dom";

type IProps = {
    user: IUsers
}
const UserComponent:FC<IProps> = ({user}) => {

    return (
        <div>
            <h2>{user.id} - {user.username} - {user.name}</h2>
            <button><Link to={user.id.toString()}>Post: {user.username}</Link></button>

            <hr/>
        </div>
    );
};

export default UserComponent;