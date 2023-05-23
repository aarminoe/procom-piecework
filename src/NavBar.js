import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/history">history</Link>
            <Link to="/rough">Rough</Link>
            <Link to='/trim'>Trim</Link>
            <Link to='/activation'>Activation</Link>
        </div>
    )
}

export default NavBar