import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import PostsComponent from "../components/PostsComponent";
import {postActions} from "../redux/slice/postSlice";

const PostsPage = () => {
    let {posts} = useAppSelector(state => state.postStore)

    let dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(postActions.loadPosts())
    }, []);
    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;