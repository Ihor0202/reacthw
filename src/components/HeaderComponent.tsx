import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>user</Link></li>
                <li><Link to={'posts'}>post</Link></li>
                <hr/>
            </ul>
        </div>
    );
};

export default HeaderComponent;