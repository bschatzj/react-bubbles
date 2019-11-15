import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from './components/BubblePage'
import ProtectedRoute from "./components/ProtectedRoutes";
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path='/bubbles' component={BubblePage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
