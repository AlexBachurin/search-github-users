import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../AuthContext';
const RequireAuth = ({ children, redirectTo }) => {
    const { isLoggedIn, user } = useAuthContext();
    const isUser = isLoggedIn && user;
    return isUser ? children : <Navigate to={redirectTo} />

}

export default RequireAuth