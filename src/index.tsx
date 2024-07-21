import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import UsersPage from "./Page/UsersPage";
import PostPage from "./Page/PostPage";
import CommentsPage from "./Page/CommentsPage";
import UserPostPage from "./Page/UsersPostPage/UserPostPage";
import PostCommentsPage from "./Page/PostCommentsPage/PostCommentsPage";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Створити сторінки та роути на них
// users
// posts
// comments
// При переході на кожну з них отримувати відповідні відповіді від джейсонплейсхолдеру та виводити всі об'єкти
//
// Додатково :
//     На сторінці з юзерами зробити кнопку/лінку, при кліку на яку буде перехід на сторінку,
//     на якій відобразяться пости цього юзера
//
//
//
// На сторінці зі всіма постами зробити те саме, тільки виводити комменти цього поста





// <button><Link to={post.id.toString()}> userId: {post.userId}</Link></button>


let Router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {
                path: 'users', element: <UsersPage/>,
                // children: [
                //     {path: ':id', element: <UserPostPage/>}
                // ]
            },
            {path: 'users/:id', element: <UserPostPage/>},

            {path: 'posts', element: <PostPage/>},
            {path: 'posts/:postId', element: <PostCommentsPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ]
    }
])
root.render(
    <RouterProvider router={Router}/>
);
