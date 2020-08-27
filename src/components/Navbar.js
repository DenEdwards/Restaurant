import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                <Link to="/" className="link">Cinnamon</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto nav-ul">
                        <li className="nav-item active">
                            <a className="nav-link link" href="#">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;