import React, {FC} from 'react';
import {IUser} from "../model/IUsers";
import UserComponent from "./UserComponent";


type IProps = {
    users: IUser[]
}
const UsersComponent: FC<IProps> = ({users}) => {



    return (
        <div>
            {users.map(user =>  <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;