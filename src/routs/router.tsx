import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import UsersPage from "../Page/UsersPage";
import AuthPage from "../Page/AuthPage";
import CarsPage from "../Page/CarsPage";
import React from "react";


export const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>,
        children: [
            {path: '/users', element: <UsersPage/>},
            {path: '/auth', element: <AuthPage/>},
            {path: '/cars', element: <CarsPage/>}
        ]
    }
])
