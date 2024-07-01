import React, {FC} from 'react';
import {IPost} from "../../model/IPost";

interface IProps{
    posts: IPost[]
}
const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(({id, title, body, tags}) => <div key={id}>
                    <h2>{id} - {title}</h2>
                    <p>{body}</p>
                    <p>{tags}</p>
                </div>)
                // <p>{posts.map(post => <div>20</div>)}</p>
            }
        </div>
    );
};

export default PostsComponent;