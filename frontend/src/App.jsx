
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/loginPage'
import Signin from './pages/signupPage'
import CaptainLoginPage from './pages/captainLoginPage'
import CaptainSigninPage from './pages/captainSigninPage'

function hello() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signin />}></Route>
        <Route path='/captain-signup' element={<CaptainSigninPage />}></Route>
        <Route path='/captain-login' element={<CaptainLoginPage />}></Route>
      </Routes>
    </>

  )
}

export default hello