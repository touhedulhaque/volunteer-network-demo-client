import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Donation from './Components/Donation/Donation';
import Events from './Components/Events/Events';
import Blog from './Components/Blog/Blog';
import Admin from './Components/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';


export const UserContext = createContext();
export const UserVolunteerContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: ''
});
const [volunteerContext, setVolunteerContext] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser ]} >
      <UserVolunteerContext.Provider value={[volunteerContext, setVolunteerContext ]} >

      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/donation">
            <Donation />
          </PrivateRoute>
          <PrivateRoute path="/events">
            <Events />
          </PrivateRoute>
          <PrivateRoute path="/blog">
            <Blog />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <PrivateRoute path="/service/:_id">
          <Register/>
            </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router >
      </UserVolunteerContext.Provider>
    </UserContext.Provider >
    

  );
}

export default App;
