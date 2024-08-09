import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";

export let router = createBrowserRouter([{
    path: '/', element: <MainLayout/>,
    children: [

        {index: true, element: <HomePage/>},
        {path: 'users', element: <UsersPage/>},
        {path: 'posts', element: <PostsPage/>},
        {path: 'user/:id', element: <UserPage/>},
        {path: 'posts/:id', element: <PostPage/>},
    ]
}
])