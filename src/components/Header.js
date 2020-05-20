import React from "react";
import "../style.css"



function Header(props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">Welcome&nbsp;<span id="username">{props.user ? props.user.username : "stranger"}</span>&nbsp;to Employee Directory!</nav>
    )
}

export default Header