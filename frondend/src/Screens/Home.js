import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Cards from '../Components/Cards'
import Carousal from '../Components/Carousal'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function () {
  return (
    <>
      <div><Navbar /></div>
      
      <div ><Carousal /> </div>

      <div className='m-3'>
        <Cards />
        <Cards />
        <Cards />
        
        
         </div>
      



      <div><Footer /></div>
    </>

  )
}
