import axios from "axios";
import {IUser} from "../model/IUser";
import {IUserResponse} from "../model/IUserResponse";
import {ITokenRefresh} from "../model/ITokenRefresh";
import {ITokenObtainPair} from "../model/ITokenObtainPair";
import helpRetrive from "../helpers/helpRetrive";
import {ICarPaginated} from "../model/ICarPaginated";



let axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
})
axiosInstance.interceptors.request.use(value => {


    value.headers.set('Authorization', 'Bearer ' + helpRetrive<ITokenRefresh>('tokenPair').access)
    // value.headers.set("Authorization", 'xxxxxx')
    // console.log(value)
    return value
})
let userService =  {
    saveUser: async (date: IUser): Promise<boolean> => {
        let response = await axiosInstance.post<IUserResponse>('/users', date)
        return !!response.data.id || false
    }
}


let authService = {
    authenticate: async (date: ITokenObtainPair) => {
        let response = await axiosInstance.post<ITokenRefresh>('/auth', date)
        // return response
        console.log(response.data)
        // console.log(response.data.refresh)
        // console.log(response.data.access)
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    }
}

let carsService = {
    getCars: async ()  => {
        let response = await axiosInstance.get<ICarPaginated>('/cars')

        let data = response.data;
        return data
}
}

export {userService, authService, carsService}