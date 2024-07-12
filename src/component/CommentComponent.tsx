import React, {FC} from 'react';
import {IComments} from "../model/IComments";



type IProps = {
    comment: IComments
}
const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>

            <h2>postId: {comment.postId}, id: {comment.id}</h2>
            <h3>name: {comment.name}</h3>
            <h3>email: {comment.email}</h3>
            <h4>body: {comment.body}</h4>
            </div>
    );
};

export default CommentComponent;