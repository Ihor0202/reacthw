import React, {FC} from 'react';
import {IPosts} from "../model/IPosts";
import {Link} from "react-router-dom";



type IProps = {
    post: IPosts
}
const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <h2>id: {post.id}, userId: {post.userId} - {post.title}</h2>
            <p>{post.body}</p>
            <button><Link to={post.id.toString()}>comments</Link></button>

            <hr/>
        </div>
    );
};

export default PostComponent;