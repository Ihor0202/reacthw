import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {userActions} from "./redux/slices/userSlice";



const App = () => {
  let dispatch = useAppDispatch()

  let {userSlice:{users, isLoaded}} = useAppSelector(state => state)

  useEffect(() => {
    dispatch(userActions.loadUsers())
  },[])

  return (
    <div>
      {isLoaded.toString()}
      {users.map(user => <div>{user.id}: {user.name}</div>)}
    </div>
  );
}

export default App;
