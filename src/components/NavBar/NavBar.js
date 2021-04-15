import React from "react";
import { Link , useLink, useLocation } from "react-router-dom";


const NavBar = () => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${location.pathname === "/" && "active"}`}>
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/about" && "active"}`}>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/work" && "active"}`}>
                            <Link className="nav-link" to="/work">Work</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/contact" && "active"}`}>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;