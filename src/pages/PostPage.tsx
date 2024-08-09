import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slice/postSlice";
import PostInfoComponent from "../components/PostInfoComponent";

const PostPage = () => {

    let {id} = useParams()

    let {post} = useAppSelector(state => state.postStore)

    let dispatch = useAppDispatch()

    useEffect(() => {
        if (id) dispatch(postActions.loadPost(+id))

    }, []);

    if (!post) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <PostInfoComponent post={post}/>
        </div>
    );
};

export default PostPage;