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
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainHome from './pages/captainHome'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import 'remixicon/fonts/remixicon.css'

function hello() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Start />}></Route>

        <Route path='/login' element={<Login />}></Route>

        <Route path='/riding' element={<Riding />} />

        <Route path='/captain-riding' element={<CaptainRiding />} />

        <Route path='/signup' element={<Signin />}></Route>

        <Route path='/captain-signup' element={<CaptainSigninPage />}></Route>

        <Route path='/captain-login' element={<CaptainLoginPage />}></Route>

        <Route path='/home' element={<UserProtectedWrapper>
          <Home />
        </UserProtectedWrapper>}></Route>

        <Route path='captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        }></Route>

        <Route path='/user/logout' element={<UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper>} />
      </Routes>
    </>
  )
}

export default hello