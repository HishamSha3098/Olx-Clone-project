import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Signup  from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext';

function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)

  useEffect(
    ()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        setUser(user)
      })
    }

  )
  return (
    <div>
      <Post>
      <Router>
        <Route exact path="/">
      <Home />
      </Route>
      <Route path="/signup">
      <Signup />
      </Route>
      <Route path="/login">
      <Login/>
      </Route>
      <Route path="/sell">
      <Create/>
      </Route>
      <Route path="/view">
      <ViewPost/>
      </Route>
      </Router>
      </Post>
     
    </div>
  );
}

export default App;
