import React, {FC} from 'react';
import {IPaginationPage} from "../model/IPaginationPage";
import {useSearchParams} from "react-router-dom";


type IProps = {
    prev: null | IPaginationPage
    next: null | IPaginationPage
}
const PaginationComponent: FC<IProps> = ({prev, next}) => {

    let [query, setQuery ] = useSearchParams({page: '1'});
    console.log(query)

    let changePage = (nextOrPrev: string) => {
        switch (nextOrPrev) {
            case 'next':
                setQuery({...next})
                break;
            case "prev":
                setQuery({...prev})
                break;
        }
    }

    return (
        <div>
            <button
                disabled={!prev}
            onClick={() => {
                changePage('prev')
            }}
             >
                prev
            </button>

            <button
                disabled={!next}
                onClick={() => {
                    changePage('next')

                }}

            >
                next
            </button>
        </div>
    );
};

export default PaginationComponent;