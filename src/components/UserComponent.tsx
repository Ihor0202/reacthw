import React, {Component} from 'react';
import {IUser} from "../model/IUser";


type IProp = {
    user: IUser
    getPost: (id:number) => void
}

class UserComponent extends Component <IProp> {
    render() {
        return (
            <div>
                <h3>{this.props.user.id}: {this.props.user.lastName} {this.props.user.firstName}</h3>
                <button onClick={() => {
                    this.props.getPost(this.props.user.id)
                }}>posts
                </button>
                <hr/>
            </div>
        );
    }
}

export default UserComponent;