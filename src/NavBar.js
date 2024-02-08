import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <Link className="nav" to="/history">History</Link>
            <Link className="nav" to="/rough">Rough</Link>
            <Link className="nav" to='/trim'>Trim</Link>
            <Link className="nav" to='/activation'>Activation</Link>
        </div>
    )
}

export default NavBar