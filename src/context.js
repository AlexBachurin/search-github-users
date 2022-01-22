import React, { useState, useEffect, useContext } from "react";
//get static data for now
import userData from './mockData/mockUser'
import followers from './mockData/mockFollowers'
import repos from './mockData/mockRepos'
import 'axios';
import axios from "axios";
const rootUrl = 'https://api.github.com';
//https://api.github.com/users/wesbos

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    //state for githubuser data
    const [githubUser, setGithubUser] = useState(userData);
    const [userFollowers, setUserFollowers] = useState(followers);
    const [userRepos, setUserRepos] = useState(repos);

    //state for requests limit
    const [requests, setRequests] = useState(0);
    //state for error on 0 requests on user not found
    const [error, setError] = useState({ show: false, msg: '' });
    const [loading, setLoading] = useState(false);

    //function to show remaining requests of user
    const checkRequests = () => {
        axios('https://api.github.com/rate_limit')
            .then(res => {
                const { remaining } = res.data.rate;
                setRequests(remaining);
                //if we out of requests show error
                if (remaining === 0) {
                    handleError(true, 'sorry, you are out of requests, try again later')
                }
            })
            .catch(err => console.log(err))
    }

    //error function, set defaults to reset it on call without arguments
    const handleError = (show = false, msg = '') => {
        setError({ show, msg })
    }

    //Search User

    const searchUser = async (user) => {
        setLoading(true)
        await axios(`https://api.github.com/users/${user}`)
            .then(res => {
                console.log(res);
                //set user data into state if user exists
                if (res.data) {
                    setGithubUser(res.data)
                    const { followers_url, repos_url } = res.data;
                    axios(`${followers_url}?per_page=100`)
                        .then(response => {
                            setUserFollowers(response.data)
                        })
                        .catch(err => console.log(err));
                    axios(`${repos_url}?per_page=100`)
                        .then(response => {
                            setUserRepos(response.data)
                        })
                        .catch(err => console.log(err));
                    setLoading(false);
                }
            })
            .catch(err => {
                console.log(err);
                //if we dont get response set error to true and display message
                handleError(true, 'User not found')
                setLoading(false);
            })

    }


    //once up loads show remaining requests
    useEffect(() => {
        checkRequests();
    }, []);

    return <AppContext.Provider value={{
        githubUser,
        userFollowers,
        userRepos,
        requests,
        error,
        searchUser,
        loading

    }}>
        {children}
    </AppContext.Provider>
}

//custom hook for global use
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext, AppProvider }