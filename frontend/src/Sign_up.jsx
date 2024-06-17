import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  let validationFailed = false;

  function handle(e) {
    e.preventDefault();
    validationFailed = false;

    if (!name) {
      toast.warning('Please enter name field..');
      validationFailed = true;
      return
    } else if (/[^a-zA-Z]/.test(name)) {
      toast.warning('Remove numbers from name field');
      validationFailed = true;
      return
    }

    if (phone.length !== 10) {
      toast.warning('Phone number must be 10 digits');
      validationFailed = true;
      return
    }

    if (password !== confirm) {
      toast.warning('Password and confirm password do not match');
      validationFailed = true;
      return
    }

    if (age < 11 || age > 31) {
      toast.warning('Age limit is not valid (must be between 10-30)');
      validationFailed = true;
      return
    }

    if (!validationFailed) {
      axios.defaults.withCredentials = true;
      axios.post('https://simple-login-api.vercel.app/register', { name, age, email, phone, password })
        .then(res => {
          const status = res.data.status;
          if (status === 2) {
            alert('User ID already exists');
          } else if (status === 1) {
            alert('Registered successfully');
          }
        })
        .catch(err => {
          console.error(err);
          alert('An error occurred. Please try again.');
        });
    }
  }

  return (
   <>
     <ToastContainer/>
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100 w-300'>
       
      <div className='bg-white p-3 rounded w-500'>
        <h2>Register</h2>
        <form onSubmit={handle}>
          <div className="mb-3">
            <strong>Name</strong>
            <input
              type='text'
              placeholder='Enter Name'
              autoComplete='off'
              name='Name'
              className='form-control rounded-2'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <strong>Age</strong>
            <input
              type='number'
              placeholder='Enter age'
              autoComplete='off'
              name='age'
              className='form-control rounded-2'
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <strong>Phone Number</strong>
            <input
              type='number'
              placeholder='Enter Phone Number'
              autoComplete='off'
              name='phone'
              className='form-control rounded-2'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <strong>Email</strong>
            <input
              type='email'
              placeholder='Enter Email Address'
              autoComplete='off'
              name='email'
              className='form-control rounded-2'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <strong>Password</strong>
            <input
              type='password'
              placeholder='Enter Password'
              autoComplete='off'
              name='password'
              className='form-control rounded-2'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <strong>Confirm Password</strong>
            <input
              type='password'
              placeholder='Enter confirm password'
              autoComplete='off'
              name='confirmPassword'
              className='form-control rounded-2'
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-2'>
            Register
          </button>
          <p>Already have an account?</p>
          <Link to='/Login' className='btn btn-default border w-100 bg-light'>Login</Link>
        </form>
      </div>
    </div>
        </>
  );
}

export default Signup;
