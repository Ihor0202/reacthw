import React, {FC} from 'react';
import {IPost} from "../model/IPost";
import {Link} from "react-router-dom";

type IProps = {
    post: IPost
}
const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <h4><Link to={'/posts/'+ post.id}>id: {post.id} - {post.title}</Link></h4>

            <hr/>
        </div>
    );
};

export default PostComponent