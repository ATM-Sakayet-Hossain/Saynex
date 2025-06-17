import React from 'react'
import Navbar from './Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Layout = () => {
    const userData = useSelector((state) => state.userData.user);
    // Accessing user data from Redux store
    // Check if userData is null or undefined
    if (!userData) {
        return <Navigate to="/login" />
        // Redirect to login if user is not authenticated
    }
  return (
    <div className='flex'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout;