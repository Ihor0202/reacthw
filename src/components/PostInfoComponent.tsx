import React, {FC} from 'react';
import {IPost} from "../model/IPost";

type IProps = {
    post: IPost
}
const PostInfoComponent: FC<IProps> = ({post}) => {

    return (
        <div>
            <h4>{post.id} - {post.title}</h4>
            <h4>userId:{post.userId}</h4>
            <h5>{post.body}</h5>
        </div>
    );
};

export default PostInfoComponent;