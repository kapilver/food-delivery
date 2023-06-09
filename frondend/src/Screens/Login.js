// import React,{useState} from 'react'
// import {Link , useNavigate} from 'react-router-dom'

// export default function Login() {

//   const [credentials, setcredentials] = useState({ email: "", password: "" })
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     //preventDefalult ek sinthetick event hota hai
//     const respoonse = await fetch("http://localhost:9000/api/createuser", {

//       method: "Post", 
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({  email: credentials.email, password: credentials.password, })

//     });
//     const json = await respoonse.json()

//     console.log(json);
//     if (!json.success) {
//       alert("Enter valid cradintials")
//     }
//     if(json.success){

//       navigate('/');

//     }

//   }
//   const onChange = (e) => {
//     setcredentials({ ...credentials, [e.target.name]: e.target.value })

//   }
//   return (
//    <>
//     <div className='container'>

// <form onSubmit={handleSubmit}>


//   <div className="form-group">
//     <label for="exampleInputEmail1">Email</label>
//     <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" />

//   </div>
//   <div className="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="text" className="form-control" name='password' value={credentials.password} onChange={onChange} placeholder="Password" />
//   </div>


//   <button type="submit" className="btn btn-primary">Submit</button>

//   <Link to="/createuser" className='m-3 btn btn-danger'>create new User</Link>
// </form>

// </div>
   
   
//    </>
//   )
// }
