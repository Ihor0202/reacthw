import axios from "axios";
import {Url} from "../const/url";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});

const servisUsers = {
    getAll: async () => {
        let axiosResponse = await axiosInstance.get(Url.users.all);
        return axiosResponse.data
    },

    // getOneUser: async (id: number) => {
    //     let axiosResponse = await axiosInstance.get(Url.users.oneUser(id))
    //     // return axiosResponse
    // },

    getPosts: async (id:number) => {
      let  axiosResponse = await axiosInstance.get(Url.users.posts(id))
        return axiosResponse.data
    }
}

// const servisUser = {
//     getOneUser: async (id) => {
//         let axiosResponse = await axiosInstance.get(Url.users.oneUser(id))
//     }
// }
export {servisUsers}
