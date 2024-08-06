import React from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {decrement, increment, incrementByAmount, useAppSelector} from "./redax/store";



const App = () => {
  let {value} = useAppSelector(state => state.slice)

    let dispatch = useDispatch()
  return (
    <div>
      <h2>{value}</h2>
      <button
          onClick={() =>{
              dispatch(increment())
          }}
      >inc</button>

      <button
          onClick={() => {
              dispatch(decrement())
          }}
      >dec</button>
        <button
        onClick={()=> {
            dispatch(incrementByAmount(5))
        }}
        >xxx</button>
    </div>
  );
}

export default App;
