
import './App.css';

import Home from "./Screens/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

import Login from "./Components/Login";
import Signup from './Screens/Signup';

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {
  return (

    <Router>
    <div>


        <Routes>

        

          <Route path="/" element={<Home />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path='/createuser' element={<Signup/>}></Route>
          

      


        </Routes>

    </div>

    </Router>

  );
}

export default App;
