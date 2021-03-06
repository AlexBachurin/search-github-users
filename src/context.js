import React, { useState, useEffect, useContext } from "react";
//get static data for now
import userData from './mockData/mockUser'
import followers from './mockData/mockFollowers'
import repos from './mockData/mockRepos'
import 'axios';
import axios from "axios";



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
        //call handleerror  in the beginning  without arguments to reset it every time we search
        handleError();
        setLoading(true)
        const res = await axios(`https://api.github.com/users/${user}`)
            .catch(err => {
                console.log(err);
                //if we dont get response set error to true and display message
                handleError(true, 'User not found')
                setLoading(false);
            })
        //set user data into state if user exists
        if (res) {
            setGithubUser(res.data)
        }
        const { followers_url, repos_url } = res.data;
        //wait for all page to complete fetch, repos and followers
        await Promise.allSettled([axios(`${followers_url}?per_page=100`), axios(`${repos_url}?per_page=100`)])
            .then(response => {
                console.log(response)
                const [followers, repos] = response;
                if (followers.status === 'fulfilled') {
                    setUserFollowers(followers.value.data);
                }
                if (repos.status === 'fulfilled') {
                    setUserRepos(repos.value.data)
                }
            })
            .catch(err => console.log(err))
        setLoading(false);
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