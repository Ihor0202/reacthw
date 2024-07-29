import React from 'react';
import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h3><Link to={'/users'}>users</Link></h3>
            <h3><Link to={'/auth'}>auth</Link></h3>
            <h3><Link to={'/cars'}>cars</Link></h3>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;