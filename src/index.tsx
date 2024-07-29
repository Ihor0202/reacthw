import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import UsersPage from "./Page/UsersPage";
import AuthPage from "./Page/AuthPage";
import CarsPage from "./Page/CarsPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {path: '/', element: <MainLayout/>,
    children: [
        {path: '/users', element: <UsersPage/>},
        {path: '/auth', element: <AuthPage/>},
        {path: '/cars', element: <CarsPage/>}
    ]
    }
])

root.render(
    <RouterProvider router={router}/>
);
