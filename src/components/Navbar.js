import React from "react";
import {Link} from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';


function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                <Link to="/" className="link">Cinnamon</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto nav-ul">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link link">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menu" className="nav-link link" >Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link link" >Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link link" >About</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="https://www.instagram.com/explore/tags/cinnamon/"><GrInstagram/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="https://www.facebook.com/"><FaFacebookF/></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;