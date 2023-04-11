import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../context/Context'

export const ProtectedRoutes = () => {
    const {state} = useContext(LoginContext)
    return (
        state?.isLogged ? <Outlet/> : <Navigate to="/Login"/>
    )
}

