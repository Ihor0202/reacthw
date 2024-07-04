import React, {FC} from 'react';
import {useToggle} from "../customHooks/useToggle";



const ComponentBooleanState: FC = () => {
    let [toggle,otherToggle] = useToggle(true)


    return (
        <div>
            <h1>Toggle {toggle ? 'on' : 'off'}</h1>
           <button onClick={otherToggle}>bool</button>
        </div>
    );
};

export default ComponentBooleanState;