import React, {FC} from 'react';
import {IUser} from "../model/IUsers";
import {Link} from "react-router-dom";

type IProps = {
    user: IUser
}
const UserComponent:FC<IProps> = ({user}) => {

    return (
        <div>
            <h4><Link to={'/user/'+ user.id}>{user.id} - {user.username} - {user.name}</Link></h4>

            <hr/>
        </div>
    );
};

export default UserComponent;