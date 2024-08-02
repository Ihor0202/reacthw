import React, {useEffect, useState} from 'react';
import {authService, carsService} from "../servise/api.servise";
import {AxiosError} from "axios";
import {ICarPaginated} from "../model/ICarPaginated";
import CarsComponent from "../Component/CarsComponent";
import {useNavigate, useSearchParams} from "react-router-dom";
import PaginationComponent from "../Component/PaginationComponent";

const CarsPage = () => {
    const [carPaginationObject, setCarPaginationObject] = useState<ICarPaginated>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: []
    })
    let navigate = useNavigate()
    let [query ] = useSearchParams({page: '1'});

    useEffect(() => {
        const getCarsData = async () => {
            try {
                let response = await carsService.getCars(query.get('page') || '1')
                if (response) {
                    setCarPaginationObject(response)
            }
            } catch (e) {
                let axiosError = e as AxiosError
                if (axiosError && axiosError?.response?.status === 401){
                    console.log(axiosError);
                    try {
                       await authService.refresh()
                    } catch (e) {
                        return navigate('/')

                    }

                }
            }
        }

        getCarsData()
    },[query])


    return (
        <div>
            <CarsComponent cars={carPaginationObject.items}/>
            <PaginationComponent prev={carPaginationObject.prev} next={carPaginationObject.next}/>
        </div>
    );
};

export default CarsPage;