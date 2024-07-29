import React from 'react';
import {useForm} from "react-hook-form";
import {IUser} from "../model/IUser";
import {authService} from "../api/api.servise";
import {ITokenObtainPair} from "../model/ITokenObtainPair";

const AuthFormComponent = () => {

    let {handleSubmit, register} = useForm<IUser>({
        defaultValues: {
            username: 'Ihor0202',
            password: 'Possword@02'
        }
    });
    let authenticate = (date: ITokenObtainPair) => {
        let promise = authService.authenticate(date)
        // console.log(promise)


    }

    return (
        <div>
            authenticate - автентифікувати
            <form onSubmit={handleSubmit(authenticate)}>
                <input type={'text'} {...register('username')} />
                <input type={'text'} {...register('password')}/>
                <button>auth me</button>
            </form>
        </div>
    );
};

export default AuthFormComponent;