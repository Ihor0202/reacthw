import axios from "axios";
import {Url} from "../const/url";
import {IUser} from "../model/IUser";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});

const servisUsers = {
    getAll: async () => {
        let axiosResponse = await axiosInstance.get(Url.users.all);

        return axiosResponse.data
    }
}
export {servisUsers}
