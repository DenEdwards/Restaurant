import React from "react";
import HeadContainer from './HeadContainer';
import Menu from "./Menu";
import {Footer} from "./Footer";

function Home(){
    return(
        <div>
            <HeadContainer/>
            <Menu/>
            <Footer/>
        </div>
    );
}

export default Home;