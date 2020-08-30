import React from "react";

function About(){
    return(
        <div className="about">
            <div className="about-container">
                <div className="about-des">
                    <strong>Who We Are</strong>
                    <p>Established in 1998, Cinnamon Cafe and Eatery has been a communal space for locals and travelers alike.
                    We work hard to bring our patrons our amazing new twists using our locally grown cinnamon and our freshly 
                    farmed ingredients.</p>
                </div>
                <div className="about-info">
                    <div className="address">
                        <strong>Address</strong>
                        <p>Cinnamon St, Cincinnati, OH, USA</p>
                    </div>
                    <div>
                        <strong>Hours</strong>
                        <p>Monday - Sunday</p>
                        <p>8am - 8pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;