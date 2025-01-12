import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/start'
import Login from './pages/loginPage'
import Signin from './pages/signupPage'
import CaptainLoginPage from './pages/captainLoginPage'
import CaptainSigninPage from './pages/captainSigninPage'
import Home from './pages/home'
import UserProtectedWrapper from './pages/userProtectedWrapper'
import UserLogout from './pages/userLogout'

function hello() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signin />}></Route>
        <Route path='/captain-signup' element={<CaptainSigninPage />}></Route>
        <Route path='/captain-login' element={<CaptainLoginPage />}></Route>
        <Route path='/home' element={<UserProtectedWrapper>
          <Home/>
        </UserProtectedWrapper>}></Route>
        <Route path='/user/logout' element={<UserProtectedWrapper>
          <UserLogout/>
        </UserProtectedWrapper>}/>
      </Routes>
    </>
  )
}

export default hello