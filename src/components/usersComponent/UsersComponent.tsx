import React, {useEffect, useState} from 'react';
import UserComponent from "../userComponent/UserComponent";
import {getFromUsers, getPostOfUsersById} from "../../services/api.serveces";
import {IPost} from "../../model/IPost";
import PostsComponent from "../postsComponent/PostsComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<any[]>([])
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getFromUsers()
            .then(value => {
                setUsers([...value.users])
                console.log('.')
            });
    },[])

    const getPost = (id:number) => {
        getPostOfUsersById(id).then(posts => {
            console.log(posts.posts)

            setPosts([...posts.posts])
            console.log(posts)
        })
    }
    // users.map(user => {
    //     console.log(user)
    // })
    return (
        <div>
            <div> {users.map(user => (<UserComponent key={user.id} user={user} getPost={getPost}/>))}</div>
            <div>
                {<PostsComponent posts={posts}/>}
            </div>


        </div>
    );
};

export default UsersComponent;