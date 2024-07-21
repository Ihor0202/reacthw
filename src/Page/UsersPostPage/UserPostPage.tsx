import React, {useEffect, useState} from 'react';
import {getUserPosts} from "../../servise/api.servise";
import {IPosts} from "../../model/IPosts";
import {useParams} from "react-router-dom";
import PostCommentsComponent from "../../component/PostCommentsComponent";

const UserPostPage = () => {


    let id = useParams()
    const [userPost, setUserPost] = useState<IPosts[]>([])

   useEffect(() => {
       if (id) {
           getUserPosts(id.toString()).then(posts => {
               setUserPost(posts)
           })
           console.log(id)
       }
   }, [id])



    return (
        <div>
            {userPost.map(post => <PostCommentsComponent key={post.id} post={post}/>)}
            <hr/>
        </div>
    );
};

export default UserPostPage;