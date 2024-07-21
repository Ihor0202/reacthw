import React, {useEffect, useState} from 'react';
import {getPosts} from "../../servise/api.servise";
import {IPosts} from "../../model/IPosts";
import PostComponent from "../../component/PostComponent";
import {useParams} from "react-router-dom";

const UserPostPage = () => {


    let {parems} = useParams()

    const [userPost, setUserPost] = useState<IPosts[]>([])
   useEffect(() => {
       getPosts().then(posts => {
           setUserPost(posts)
       })
   })
    return (
        <div>
            {userPost.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPostPage;