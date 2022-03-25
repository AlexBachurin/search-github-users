import React, { useState, useContext } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    return <AuthContext.Provider value={{

    }}>
        {children}
    </AuthContext.Provider>
}

const useAuthContext = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };