import React from 'react'
import {  Link} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
 <>
 
 <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <Link className="navbar-brand fs-1 " to="/">Gofood</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <Link className="nav-link" to="/">Home </Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" to="/Login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/createuser">Signup</Link>
      </li>
   
    </ul>
  </div>
</nav>
 </>
  )
}
