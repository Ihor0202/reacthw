import axios from "axios";
import {IUser} from "../model/IUser";
import {IUserResponse} from "../model/IUserResponse";
import {ITokenRefresh} from "../model/ITokenRefresh";
import {ITokenObtainPair} from "../model/ITokenObtainPair";



let axiosInstens = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
})
let userService =  {
    saveUser: async (date: IUser): Promise<boolean> => {
        let response = await axiosInstens.post<IUserResponse>('/users', date)
        return !!response.data.id || false
    }
}


let authService = {
    authenticate: async (date: ITokenObtainPair) => {
        let response = await axiosInstens.post<ITokenRefresh>('/auth', date)
        // return response
        console.log(response.data)
        console.log(response.data.refresh)
        console.log(response.data.access)
    }
}

export {userService, authService}