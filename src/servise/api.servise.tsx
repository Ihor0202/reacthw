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

    if (localStorage.getItem('tokenPair') && (value.url !== '/auth' && value.url !== '/auth/refresh') ) {
        value.headers.set('Authorization', 'Bearer ' + helpRetrive<ITokenRefresh>('tokenPair').access)

    }
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
        console.log(response.data)
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    },
    refresh: async (): Promise<void> => {
        let refreshToken = helpRetrive<ITokenRefresh>('tokenPair').refresh
        let response = await axiosInstance.post('/auth/refresh', {refresh: refreshToken})
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    }
}

let carsService = {
    getCars: async (page:string = '1')  => {
        let response = await axiosInstance.get<ICarPaginated>('/cars', {params: {page:page}})

        return  response.data
}
}

export {userService, authService, carsService}