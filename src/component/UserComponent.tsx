import React, {FC} from 'react';
import {IUsers} from "../model/IUsers";

type IProps = {
    user: IUsers
}
const UserComponent:FC<IProps> = ({user}) => {

    return (
        <div>
            <h5>{user.id} - {user.username} - {user.name}</h5>

            <hr/>
        </div>
    );
};

export default UserComponent;