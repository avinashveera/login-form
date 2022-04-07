import React from 'react'
import Login from './Login'
import Resister from './Resister'
import {
    Routes,
    Route,
  } from "react-router-dom";


const Account = () => {
  return (
    <>
    <div className='cust-container'>

    <Routes>
       <Route path="/" element={<Login />}></Route>
       <Route path="/login" element={<Login />}></Route>
       <Route exact path="/resister" element={<Resister />}></Route>
      
    </Routes>

       

     </div>
    
    </>
  )
}

export default Account