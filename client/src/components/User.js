import React, { useEffect, useState } from "react";

// Create context
const UserContext = React.createContext();

function UserProvider({children}) {
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false); //add loggedIn flag

    useEffect(() => {
        fetch("/me")
        .then(resp => {
            if (resp.ok) {
                resp.json().then(data => {
                    setUser(data)
                    data.error ? setLoggedIn(false) : setLoggedIn(true)
                })
            }
        })
    }, [])

    const login = (user) => {
        setUser(user)
        setLoggedIn(true) // set loggedIn flag
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false) // set loggedIn flag
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true) // set loggedIn flag
    }

    return (
        // add loggedIn to global state
        <UserContext.Provider value={{user, login, logout, signup, loggedIn}}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };