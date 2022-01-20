import React, { useState, useEffect, useContext } from "react";

const rootUrl = 'https://api.github.com';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{

    }}>
        {children}
    </AppContext.Provider>
}

//custom hook for global use
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext, AppProvider }