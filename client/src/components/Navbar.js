import React, { useContext } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "./User";

const linkStyle = {
    display: "inline-block",
    width: "auto",
    padding: "12px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
    border: "none",
};

function Navbar() {
    const {user, logout, loggedIn} = useContext(UserContext);
    const navigate = useHistory();


    const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    if (loggedIn) {
        return (
            <div className="navbar">
                <h1 className="title">Stix Ramen</h1>
                    <NavLink to="/" exact style={linkStyle}>Home</NavLink>
                    <NavLink to="/menu" exact style={linkStyle}>Menu</NavLink>
                    <NavLink to="/review" exact style={linkStyle}>Reviews</NavLink>
                    <NavLink to="/cart" exact style={linkStyle}>Cart</NavLink>
                    <NavLink to="/login" exact style={linkStyle}>Login</NavLink>
                    <button onClick={logoutUser} exact style={linkStyle}>Logout</button>
                <h3 className='welcome'>Welcome Back {user.username}!</h3>
            </div>
        )
    } else {
        return (
            <div className="navbar">
                <h1 className="title">Stix Ramen</h1>
                    <NavLink to="/" exact style={linkStyle}>Home</NavLink>
                    <NavLink to="/menu" exact style={linkStyle}>Menu</NavLink>
                    <NavLink to="/review" exact style={linkStyle}>Reviews</NavLink>
                    <NavLink to="/cart" exact style={linkStyle}>Cart</NavLink>
                    <NavLink to="/login" exact style={linkStyle}>Login</NavLink>
            </div>
        )
    }
}
export default Navbar;