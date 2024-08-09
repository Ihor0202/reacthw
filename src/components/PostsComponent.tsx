import React, {FC} from 'react';
import {IUser} from "../model/IUsers";
import {IPost} from "../model/IPost";
import PostComponent from "./PostComponent";



type IProps = {
    posts: IPost[]
}
const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;