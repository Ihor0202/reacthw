import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import UsersPage from "./Page/UsersPage";
import PostPage from "./Page/PostPage";
import CommentsPage from "./Page/CommentsPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Створити сторінки та роути на них
// users
// posts
// comments
// При переході на кожну з них отримувати відповідні відповіді від джейсонплейсхолдеру та виводити всі об'єкти


let Router = createBrowserRouter([
    {path: '/', element: <MainLayout/>,
    children: [
        {path: 'users', element: <UsersPage/>},
        {path: 'posts', element: <PostPage/>},
        {path: 'comments', element: <CommentsPage/>}
    ]
    }
])
root.render(
    <RouterProvider router={Router}/>
);
