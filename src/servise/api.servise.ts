import axios from "axios";
import {IUsers} from "../model/IUsers";
import {IPosts} from "../model/IPosts";
import {IComments} from "../model/IComments";


let axiosInstans = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    // headers: {'Content-Type': 'application/json'}
})


let getUsers = async ():Promise<IUsers[]> => {
    return axiosInstans.get('users').then(users => {
        return  users.data
    })
}
let getPosts = async ():Promise<IPosts[]> => {
    return axiosInstans.get('posts').then(post => {
        return post.data
    })
}
let getUserPosts = async (userId:string):Promise<IPosts[]> => {
    return axiosInstans.get(`users/${userId}/posts`).then(post => {
        return post.data
    })
}


let getComments = async ():Promise<IComments[]> => {
    return axiosInstans.get('comments').then(comments => {
        return comments.data
    })
}

let getPostComments = async (postId:string):Promise<IComments[]> => {

    return axiosInstans.get(`/posts/${postId}/comments`).then(comments => {
        return comments.data
    })
}
export {getUsers, getPosts, getUserPosts, getComments, getPostComments}