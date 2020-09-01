import React, {useState} from "react";
import MenuCard from './MenuCard';
import axios from "axios";
import Fade from 'react-reveal/Fade';

function Menu(){

    const [state, setstate] = useState({
        drinks: [],
        mains: [],
        desserts: []
    });

    axios.get("http://localhost:3000/items")
        .then(response =>{
            setstate(prevVal => {
                return ({
                    drinks: response.data.filter(item =>{
                        return item.type === "drink";
                    }),
                    mains: response.data.filter(item =>{
                        return item.type === "main";
                    }),
                    desserts: response.data.filter(item =>{
                        return item.type === "dessert";
                    })
                });
            });
        })
        .catch(err => {
            console.log(err);
        })
    
    function createCard(item){
        return(
        <MenuCard 
            key={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
        / >);
    }

    return(
        <div className="menu" id="menu">
            <div className="menu-header">
                <div>Our Menu</div>
            </div>
            <Fade bottom cascade >
                <div className="menu-section">
                    <div className="menu-title">
                        Drinks
                    </div>
                    <hr></hr>
                    <div className="menu-items">
                        {state.drinks.map(createCard)}
                    </div>
                </div>
                <div className="menu-section">
                    <div className="menu-title">
                        Mains
                    </div>
                    <hr></hr>
                    <div className="menu-items">
                        {state.mains.map(createCard)}
                    </div>
                </div>
                <div className="menu-section">
                    <div className="menu-title">
                        Desserts
                    </div>
                    <hr></hr>
                    <div className="menu-items">
                        {state.desserts.map(createCard)}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Menu;