import React from 'react';
import {useForm} from "react-hook-form";
import {IFormType} from "../model/IFormType";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/user.Validator";





// потрібно на jsonplaceholder відправити об'єкт post
// відповідно, для цього вам потрібно його створити. Створення об'єкту повинно відбуватись за допомоги форми з useForm та валідацією.
// Якщо ви не пам'ятаєте як відправляти данні на jsonplaceholder подивіться його документації
const FormComponent = () => {



    let {formState: {isValid}, register,handleSubmit} = useForm<IFormType>({
        mode: "all",
        resolver: joiResolver(userValidator)
    })
    let FormSubmitCustomHandler = (data:IFormType) => {
        console.log(data)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: data.username,
                body: data.password,
            }),
        })
            .then(response => response.json())
            .then(json => console.log(json))
    };

    console.log(isValid)
    return (
        <div>
            <form onSubmit={handleSubmit(FormSubmitCustomHandler)}>
                <input type={"text"} {...register("username")}/>
                <input type={"text"} {...register("password")}/>
                <button disabled={!isValid}>button</button>
            </form>
        </div>
    );
};

export default FormComponent;