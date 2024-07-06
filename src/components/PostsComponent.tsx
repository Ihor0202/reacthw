import React, {Component} from 'react';
import {IPosts} from "../model/IPosts";


type IProps = {posts: IPosts}
class PostsComponent extends Component <IProps> {






    render() {
        return (
            <div>
                <h2>{this.props.posts.id}: {this.props.posts.title}</h2>
                <h3>{this.props.posts.body}</h3>
                <h4>{this.props.posts.tags}</h4>

            </div>
        );
    }
}

export default PostsComponent;