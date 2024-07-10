import React from 'react';
import {useForm} from "react-hook-form";
import {IFormType} from "../model/IFormType";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/user.Validator";





// потрібно на jsonplaceholder відправити об'єкт post
// відповідно, для цього вам потрібно його створити. Створення об'єкту повинно відбуватись за допомоги форми з useForm та валідацією.
// Якщо ви не пам'ятаєте як відправляти данні на jsonplaceholder подивіться його документації
const FormComponent = () => {



    let {formState: {isValid,errors}, register,handleSubmit} = useForm<IFormType>({
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
                id: data.id,
                title: data.title,
                body: data.body,
            }),
        })
            .then(response => response.json())
            .then(json => console.log(json))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(FormSubmitCustomHandler)}>
                {errors.id && <div>{errors.id.message}</div>}
                <input type={"number"} {...register("id")}/>
                {errors.title && <div>{errors.title.message}</div>}
                <input type={"text"} {...register("title")}/>
                {errors.body && <div>{errors.body.message}</div>}
                <input type={"text"} {...register("body")}/>
                <button disabled={!isValid}>button</button>
            </form>
        </div>
    );
};

export default FormComponent;