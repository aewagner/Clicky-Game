import React from "react";

const Navbar = (props) => (
<nav className="navbar navbar-light bg-light sticky-top">
<a className="navbar-brand">Clicky Game!</a>
<span className="navbar-text">
     {props.text}
    </span>
<span className="navbar-text text-primary">
     Score: {props.score}  |  High Score: {props.highestScore}
    </span>
</nav>
);

export default Navbar;