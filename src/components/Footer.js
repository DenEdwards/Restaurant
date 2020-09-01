import React from "react";
import { DiGithubFull } from 'react-icons/di';
import { GrPersonalComputer } from 'react-icons/gr';
import { AiOutlineLinkedin } from 'react-icons/ai';

export function Footer(){

    var date = new Date();
    var year = date.getFullYear();

    return(
        <footer>
            <div className="footer-container">
                Denzel Edwards © {year}
                <a href="https://denedwards.github.io/"><GrPersonalComputer className="footer-icon"/></a>
                <a href="https://github.com/DenEdwards"><DiGithubFull className="footer-git"/></a>
                <a href="https://ca.linkedin.com/in/denzel-edwards-093927170?trk=people-guest_people_search-card"><AiOutlineLinkedin className="footer-icon"/></a>
            </div>
        </footer>
    );
}