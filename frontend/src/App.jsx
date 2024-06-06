import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './Sign_up.jsx';
import Login from './Login';
import ForgetPs from './Forgetps';
import Dashboard from './dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/' element={<Signup/>} ></Route>
         <Route path='/login' element={<Login/>}></Route>
        <Route path='/forgetps' element ={<ForgetPs />}></Route>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
