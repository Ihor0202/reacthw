import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>user</Link></li>
                <li><Link to={'posts'}>post</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;