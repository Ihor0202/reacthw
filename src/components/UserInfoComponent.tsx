import React, {FC} from 'react';
import {IUser} from "../model/IUsers";

type IProps = {
    user: IUser
}
const UserInfoComponent: FC<IProps> = ({user}) => {


    return (
        <div>
            <h3>{user.id} - {user.name}</h3>
            <h4>{user.username}</h4>
            <h5>{user.email}</h5>
        </div>
    );
};

export default UserInfoComponent;