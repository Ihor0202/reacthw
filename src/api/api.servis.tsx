import axios from "axios";
import {Url} from "../const/url";
import {IUser} from "../model/IUser";
import {IPosts} from "../model/IPosts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});

const servisUsers = {
    getAll: async ():Promise<IUser[]> => {
        let axiosResponse = await axiosInstance.get(Url.users.all);
        return axiosResponse.data.users
    },

    // getOneUser: async (id: number) => {
    //     let axiosResponse = await axiosInstance.get(Url.users.oneUser(id))
    //     // return axiosResponse
    // },

    getPosts: async (id:number):Promise<IPosts[]> => {
      let  axiosResponse = await axiosInstance.get(Url.users.posts(id))
        return axiosResponse.data.posts
    }
}

export {servisUsers}
