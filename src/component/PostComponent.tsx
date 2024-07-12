import React, {FC} from 'react';
import {IPosts} from "../model/IPosts";



type IProps = {
    post: IPosts
}
const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <h2>id: {post.id}, userId: {post.userId} - {post.title}</h2>

            <p>{post.body}</p>
            <hr/>
        </div>
    );
};

export default PostComponent;