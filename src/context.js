import React, { useState, useEffect, useContext } from "react";
//get static data for now
import user from './mockData/mockUser'
import followers from './mockData/mockFollowers'
const rootUrl = 'https://api.github.com';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    //write current user info in this state(static for now)
    const [githubUser, setGithubUser] = useState(user);

    console.log(githubUser)
    return <AppContext.Provider value={{
        githubUser,
        followers
    }}>
        {children}
    </AppContext.Provider>
}

//custom hook for global use
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext, AppProvider }