import React, {FC} from 'react';
import {IUser} from "../../model/IUser";

interface IProm {
    user: IUser
    getPost: (id: number) => void
}
const UserComponent: FC<IProm> = ({user, getPost}) => {
    return (
        <div>
            <h5>{user.id} - {user.firstName} {user.lastName} {user.age} {user.gender}</h5>
            <button onClick={() => {getPost(user.id)

            }} >posts</button>
            <hr/>
        </div>
    );
};

export default UserComponent;