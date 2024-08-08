import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {userActions} from "./redux/slices/userSlice";
import {postActions} from "./redux/slices/postSlice";



const App = () => {
  let dispatch = useAppDispatch()

  let {users, isLoaded} = useAppSelector(state => state.userSlice)
  let {posts} = useAppSelector(state => state.postSlice)


  useEffect(() => {
    dispatch(userActions.loadUsers())
  },[])

  useEffect(() => {
    dispatch(postActions.loadPosts())
  }, []);

  return (
      <div>
          <div>
              {isLoaded.toString()}
              {users.map(user => <div key={user.id}>{user.id}: {user.name}</div>)}

          </div>
          <hr/>
          <div>
              {posts.map(post => <div key={post.id}>{post.id}: {post.title}</div>)}

          </div>
      </div>
  );
}

export default App;
