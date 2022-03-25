import React, { useState, useContext } from "react";
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    //state for user 
    const [user, setUser] = useState(null);
    //state for checking if user is Authenticated
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let navigate = useNavigate();
    ///Sing in functionality
    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                if (user) {
                    setIsLoggedIn(true);
                    setUser(user);
                    navigate('/')
                }
            }).catch((error) => {
                console.log(error);
            });
    }

    //logout
    const logout = () => {
        setIsLoggedIn(false)
        auth.signOut();
    }

    // useEffect(() => {

    //     const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
    //         if (userAuth) {
    //             // User logged in
    //             console.log(userAuth)
    //             setIsLoggedIn(true);
    //             setUser(userAuth)
    //         } else {
    //             // User logged out
    //             setIsLoggedIn(false)
    //             setUser(null);
    //         }
    //     });

    //     return unsubscribe;
    // }, []);
    return <AuthContext.Provider value={{
        user,
        signIn,
        isLoggedIn,
        logout
    }}>
        {children}
    </AuthContext.Provider>
}

const useAuthContext = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };