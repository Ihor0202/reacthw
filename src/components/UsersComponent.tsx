import React, {Component} from 'react';
import {IUser} from "../model/IUser";
import {servisUsers} from "../api/api.servis";
import UserComponent from "./UserComponent";
import {IPosts} from "../model/IPosts";
import PostsComponent from "./PostsComponent";

type StateType = {
    users: IUser[]
    posts:IPosts[]

}
// type PostType = {
//     posts:IPosts[]
// }
class UsersComponent extends Component<{},StateType> {
    state: StateType = {
        users: [],
        posts: []
}


    componentDidMount() {
        servisUsers.getAll().then(value => {
            this.setState( {...this.state, users: [...value]})
            console.log(value)

        })
    }

    getPosts = (id:number) => {
        servisUsers.getPosts(id).then(posts => {
            this.setState( {...this.state, posts: [...posts]})

            console.log(posts)
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => <UserComponent key={user.id} user={user} getPost={this.getPosts}/>)
                }
                {
                    this.state.posts.map(posts => <PostsComponent key={posts.id} posts={posts}/>)
                }
            </div>
        );
    }
}

export default UsersComponent;