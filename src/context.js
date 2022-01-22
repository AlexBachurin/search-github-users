import React, { useState, useEffect, useContext } from "react";
//get static data for now
import user from './mockData/mockUser'
import followers from './mockData/mockFollowers'
import repos from './mockData/mockRepos'
import 'axios';
import axios from "axios";
const rootUrl = 'https://api.github.com';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    //write current user info in this state(static for now)
    const [githubUser, setGithubUser] = useState(user);
    const [userFollowers, setUserFollowers] = useState(followers);
    const [userRepos, setUserRepos] = useState(repos);
    //state for requests limit
    const [requests, setRequests] = useState(0);
    console.log(githubUser)

    const checkRequests = () => {
        axios('https://api.github.com/rate_limit')
            .then(res => {
                console.log(res.data);
                const { remaining } = res.data.rate;
                console.log(remaining)
                setRequests(remaining);
            })
            .catch(err => console.log(err))
    }

    //once up loads show remaining requests
    useEffect(() => {
        checkRequests();
    }, []);

    return <AppContext.Provider value={{
        githubUser,
        followers,
        repos,
        requests
    }}>
        {children}
    </AppContext.Provider>
}

//custom hook for global use
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext, AppProvider }