import React from 'react';
import {useForm} from "react-hook-form";
import {IUser} from "../model/IUser";
import {userService} from "../servise/api.servise";

const RegFormComponent = () => {
    let {handleSubmit, register} = useForm<IUser>()
   let onSubmitFormHandler = (date: IUser) => {
let b = userService.saveUser(date);
       console.log(b)

   }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitFormHandler)}>
                <input type={'text'} {...register('username')} />
                <input type={'text'} {...register('password')}/>
                <button>reg me</button>
            </form>
        </div>
    );
};

export default RegFormComponent;