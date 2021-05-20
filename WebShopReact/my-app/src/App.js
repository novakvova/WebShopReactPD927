import React, { Component } from 'react'; //imrc
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/home';
import About from './components/about';
import CounterPage from './components/counter';
import Navbar from './components/navbar';
import LoginPage from './components/auth/login';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/counter">
                <CounterPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}




export default App;
