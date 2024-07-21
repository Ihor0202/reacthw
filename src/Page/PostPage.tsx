import React, {useEffect, useState} from 'react';
import {IPosts} from "../model/IPosts";
import {getPosts} from "../servise/api.servise";
import PostComponent from "../component/PostComponent";
import {Outlet} from "react-router-dom";

const PostPage = () => {

    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        getPosts().then(post => {
            setPosts(post)
        })
    },[])

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
            <Outlet/>
        </div>
    );
};

export default PostPage;