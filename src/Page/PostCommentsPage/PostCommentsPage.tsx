import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getPostComments} from "../../servise/api.servise";
import {IComments} from "../../model/IComments";
import CommentComponent from "../../component/CommentComponent";

const PostCommentsPage = () => {


    let {postId} = useParams()
    const [comments, setComments] = useState<IComments[]>([])

    console.log(postId)
useEffect(()=> {
    if (postId) {
        getPostComments(postId).then(comments => {
            setComments(comments)

        })
}

},[postId])

    return (
        <div>
            {comments.map(comments => <CommentComponent key={comments.id} comment={comments}/>)}
        </div>
    );
};

export default PostCommentsPage;