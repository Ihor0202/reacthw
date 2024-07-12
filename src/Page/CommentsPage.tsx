import React, {useEffect, useState} from 'react';
import {IComments} from "../model/IComments";
import {getComments} from "../servise/api.servise";
import CommentComponent from "../component/CommentComponent";

const CommentsPage = () => {

    const [comments, setComments] = useState<IComments[]>([])

    useEffect(() => {
        getComments().then(comment => setComments(comment))
    }, [])
    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;