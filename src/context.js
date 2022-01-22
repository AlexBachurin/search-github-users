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
    //state for error on 0 requests on user not found
    const [error, setError] = useState({ show: false, msg: '' });
    console.log(githubUser)

    //function to show remaining requests of user
    const checkRequests = () => {
        axios('https://api.github.com/rate_limit')
            .then(res => {
                const { remaining } = res.data.rate;
                setRequests(0);
                //if we out of requests show error
                if (requests === 0) {
                    handleError(true, 'sorry, you are out of requests, try again later')
                }
            })
            .catch(err => console.log(err))
    }

    //error function, set defaults to reset it on call without arguments
    const handleError = (show = false, msg = '') => {
        setError({ show, msg })
    }

    //once up loads show remaining requests
    useEffect(() => {
        checkRequests();
    }, []);

    return <AppContext.Provider value={{
        githubUser,
        followers,
        repos,
        requests,
        error
    }}>
        {children}
    </AppContext.Provider>
}

//custom hook for global use
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext, AppProvider }