import React from "react";
import App from "./Router";
import Profile from "../Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/user">
            <Users />
          </Route>
        </Switch>
    
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}