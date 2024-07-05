import React, {Component} from 'react';
import {IUser} from "../model/IUser";
import {servisUsers} from "../api/api.servis";

type StateType = {
    users: IUser[]
}
class UsersComponent extends Component<{},StateType> {
    state: StateType = {
        users: []
}

    componentDidMount() {
        servisUsers.getAll().then(value => {
            this.setState({users: [...value.users]})
            console.log(value)

        })
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => <h4 key={user.id}>{user.id}: {user.lastName}</h4>)
                }
                {

                }
            </div>
        );
    }
}

export default UsersComponent;