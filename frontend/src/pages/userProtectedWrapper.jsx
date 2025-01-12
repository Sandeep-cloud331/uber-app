import React, { useContext,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const userProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()


  useEffect(()=>{
    if (!token) {
      navigate('/login')
    }
  },[token])

  return (
    <>
      {children}
    </>
  )
  
}

export default userProtectedWrapper