import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
 import {toast} from 'react-toastify';
//import toast,{Toaster} from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom';



function Signup() {
    const [name,setname] =useState('')
    const [age,setage] = useState('')
    const[email,setemail] =useState('')
    const [phone,setphone]= useState('')
    const [password,setps] =useState('')
    const [conform, setcp] =useState('')
    var f =0
    var status =0
    const pattern ='0123456789 '
function handle(e){
  // alert('helllo')
  let err
  e.preventDefault()
   if (name.length != 0){
       if(/[^a-zA-Z]/.test(name)){
         alert('Remove numbers from name field')
       }
       
   }else{
    alert('Please enter name field..')
   }
   if (phone.length != 10){
    f=1
    alert('Phone number must 10 digit')
   }
   if(password != conform ){
    f=1
    alert('Password and conform password are mismatch')
   }
   if (age < 11 || age >31 ){
    f=1
    alert('age limit is not valid between 10-30')
   }
   if (f==0){
     axios.post('http://localhost:3001/register',{name,age,email,phone,password})
     .then(res => {
         status = res.data.status
      console.log(res)
      if (status == 2){
        alert('user id already exists')
      }
      if (status ==1){
        alert('inserted successfully..')
      }} 
      )
     .catch(err => console.log(err))
     
   }
   
   
}

  return (
    <>
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100 w-300'>
         <div className='bg-white p-3 rounded w-250'>
           <h2>Register</h2>
         <form onSubmit={handle}>
           <div className="mb-3">
            <strong>Name</strong>
            <input type='text' placeholder='Enter Name' autoComplete='off' name='Name' className='form-control rounded-2' onChange={(e)=>setname(e.target.value)} ></input>
           </div>
           <div className="mb-3">
            <strong>Age</strong>
            <input type='number' placeholder='Enter age' autoComplete='off' name='age' className='form-control rounded-2' onChange={(e)=>setage(e.target.value)} ></input>
           </div>
           <div className="mb-3">
            <strong>Phone Number</strong>
            <input type='number' placeholder='Enter Phone Number' autoComplete='off' name='phone' className='form-control rounded-2' onChange={(e)=>setphone(e.target.value)}></input>
           </div>
           <div className="mb-3">
            <strong>Email</strong>
            <input type='email' placeholder='Enter Email Address' autoComplete='off' name='email' className='form-control rounded-2' onChange={(e)=>setemail(e.target.value)}></input>
           </div>
           <div className="mb-3">
            <strong>Password</strong>
            <input type='password' placeholder='Enter Password' autoComplete='off' name='password' className='form-control rounded-2' onChange={(e)=>setps(e.target.value)} ></input>
           </div>
           <div className="mb-3">
            <strong>Conform Password</strong>
            <input type='password' placeholder='Enter conform password' onChange={(e)=>setcp(e.target.value)} autoComplete='off' name='confromps' className='form-control rounded-3'></input>
           </div>

           <button type='submit' className='btn btn-success w-100 rounded-2'>
            Register
           </button>
           <p>Already have an account</p>
           <Link to='/Login' className='btn btn-default border w-100 bg-light'>Login</Link>
         </form>
         </div>

      </div>
    </>
  )
}

export default Signup
