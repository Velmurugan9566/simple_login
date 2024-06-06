import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
 import {toast} from 'react-toastify';
//import toast,{Toaster} from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import axios from 'axios'
import { Link ,useNavigate} from 'react-router-dom';



function ForgetPs() {
    const navigate =useNavigate()
    const[email,setemail] =useState('')
   const [otp,setotp] =useState('')
    const [password,setps] =useState('')
    var f =0
    var status =0
function handle(e){
  // alert('helllo')
  let err
  e.preventDefault()
   if (f==0){
     axios.put('http://localhost:3001/forgetps',{email,password})
     .then(res => {
         status = res.data.status
          console.log(res)
          if (status == 2){
            alert('user id not exists')
          }
          if (status ==1){
            alert('update successfully..')
             navigate('/login')
          }
        } 
    )
     .catch(err => console.log(err))
     
   }
   
   
}

  return (
    <>
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100 w-300'>
         <div className='bg-white p-3 rounded w-250'>
           <h2>Forget Password</h2>
         <form onSubmit={handle}>
           <div className="mb-3">
            <strong>Email</strong>
            <input type='email' placeholder='Enter Email Address' autoComplete='off' name='email' className='form-control rounded-2' onChange={(e)=>setemail(e.target.value)}></input>
           </div>
           <div className="otp">
            <strong>OTP</strong>
            <input type='Number' placeholder='Enter OTP' autoComplete='off' name='otp' className='form-control rounded-2' onChange={(e)=>setotp(e.target.value)} ></input>
           </div>
           <div className="mb-3">
            <strong>Create Password</strong>
            <input type='text' placeholder='Enter password' autoComplete='off' name='psw' className='form-control rounded-2' onChange={(e)=>setps(e.target.value)} ></input>
           </div>

           <button type='submit' className='btn btn-success w-100 rounded-2'>
           Submit
           </button>
           <p>Switch to Login</p>
           <Link to='/Login' className='btn btn-default border w-100 bg-light'>Login</Link>
         </form>
         </div>

      </div>
    </>
  )
}


export default ForgetPs;