import { NavLink } from "react-router-dom";

const linkStyle = {
    display: "inline-block",
    width: "auto",
    padding: "12px",
    margin: "0 6px 6px",
    background: "white",
    textDecoration: "none",
    color: "black",
};

function Navbar() {
    return (
        <div className="navbar">
            <h1>Stix Ramen</h1>
                <NavLink to="/" exact style={linkStyle}>Home</NavLink>
                <NavLink to="/menu" exact style={linkStyle}>Menu</NavLink>
                <NavLink to="/review" exact style={linkStyle}>Reviews</NavLink>
                <NavLink to="/login" exact style={linkStyle}>Log In</NavLink>
        </div>
    )
}
export default Navbar;