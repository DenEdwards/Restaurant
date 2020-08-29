import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';


function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                <a className="link" href="#header">Cinnamon</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto nav-ul">
                        <li className="nav-item active">
                            <a className="nav-link link" href="#header">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#menu">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">About</a>
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