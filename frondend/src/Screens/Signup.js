

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export default function Signup() {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    //preventDefalult ek sinthetick event hota hai
    const respoonse = await fetch("http://localhost:9000/api/createuser", {

      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })

    });
    const json = await respoonse.json()

    console.log(json);
    if (!json.success) {
      alert("Enter valid cradintials")
    }

  }
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })

  }


  return (

    <>

      <div className='container'>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="name" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter name" />

          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" />

          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="text" className="form-control" name='password' value={credentials.password} onChange={onChange} placeholder="Password" />
          </div>


          <div className="form-group">
            <label for="exampleInputPassword1">Address</label>
            <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} placeholder="address" />
          </div>


          <button type="submit" className="btn btn-primary">Submit</button>

          <Link to="/Login" className='m-3 btn btn-danger'>Already User</Link>
        </form>

      </div>

    </>

  )
}
