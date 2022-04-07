import React from 'react'
import { Link } from 'react-router-dom'

const Resister = () => {
  return (
   <>
   
   <div className='cust-cont-in' style={{height:"400px",display:"flex",alignItems:"center"}}>
  
      
  <form style={{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        
  <input name='phone'  style={{width:"250px",height:"30px",marginLeft:"25px",marginBottom:"10px",borderRadius:"10px",border:"none",paddingLeft:"5px"}}  type="text" id='user' placeholder='enter your mobile number' />
  <input name='password'  style={{width:"250px",height:"30px",marginLeft:"25px",marginBottom:"10px",borderRadius:"10px",border:"none",paddingLeft:"5px"}}  type="password" id='password' placeholder='enter your password' />
  <input name='password'  style={{width:"250px",height:"30px",marginLeft:"25px",marginBottom:"10px",borderRadius:"10px",border:"none",paddingLeft:"5px"}}  type="password" id='password' placeholder='re-enter your password' />

  <button  type="button" style={{width:"250px",height:"30px",marginLeft:"25px",padding:"5px 20px",border:"1px solid #01e675" ,backgroundColor:"#01e675",color:"white",borderRadius:"10px",marginBottom:"10px",paddingLeft:"5px"}}>Resister</button>
  <Link to='/' style={{color:"white",textDecoration:"none",marginBottom:"10px"}}>already have an account ?</Link>
 <Link to="/login"> <button  type="button" style={{width:"250px",height:"30px",marginLeft:"25px",padding:"5px 20px",border:"1px solid #01e675" ,backgroundColor:"#01e675",color:"white",borderRadius:"10px",marginBottom:"10px",paddingLeft:"5px"}}>login</button></Link>
          
         
  </form>
  </div>
   
   </>
  )
}

export default Resister