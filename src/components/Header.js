import React from "react";
import "../style.css"



function Header(props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">{props.user ? `Welcome, ${props.user.username} to Employee Directory!` : "New phone who dis?"}</nav>
    )
}

export default Header