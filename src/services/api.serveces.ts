import axios from "axios";
import {IUser} from "../model/IUser";



// const getFromUsers = () => {
//     return  fetch('https://dummyjson.com/users')
//         .then(res => res.json())
// }
// const getPostOfUsersById = (id:number) => {
//
//     // return  fetch('https://dummyjson.com/posts/' + id)
//     return  fetch('https://dummyjson.com/posts/user/' + id)
//     // return  fetch('https://dummyjson.com/users/' + id + '/posts')
//         .then(res => res.json())
// }

let axiosInstal = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type': 'application/json'}
})

const getFromUsers = async ():Promise<IUser[]> => {
    return await axiosInstal.get('/users')
        .then((value) => {
            // console.log(value)
            return  value.data})

}

const getPostOfUsersById = async (id:number):Promise<IUser[]> => {
    return await axiosInstal.get('/posts/user/' + id).then((value) => {
        return value.data
    })
}
export {getFromUsers , getPostOfUsersById}