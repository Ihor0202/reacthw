import React, {FC} from 'react';
import {ICarWithAuth} from "../model/ICarWithAuth";
type IProps = {
    cars: ICarWithAuth[]
}

const CarsComponent: FC<IProps> =  ({cars}) => {
    return (
        <div>
            {cars.map(car => <div key={car.id}>{car.brand}: {car.price}</div>)}
        </div>
    );
};

export default CarsComponent;