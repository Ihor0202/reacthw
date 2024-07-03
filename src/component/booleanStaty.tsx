import React, {FC} from 'react';
import {useToggle} from "../customHooks/useToggle";

const BooleanStaty: FC<any> = () => {
    let [toggle,otherToggle] = useToggle(true)
    // const btn = () => {
    //
    // }
    console.log(toggle)
    return (
        <div>
            {
                <h1>h1</h1>
            }
        </div>
    );
};

export default BooleanStaty;