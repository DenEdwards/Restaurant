import React from "react";

function MenuCard(props){
    return(
        <div className="menu-card">
            <img src={require("../style/images/"+props.image+".jpg")} alt={props.image} ></img>
            <div className="card-des">
                <div className="card-title">
                    <strong>{props.name} - ${props.price}</strong>
                    <br></br>
                    <p>{props.description}</p>
                </div>
            </div>
            
        </div>
    );
};
export default MenuCard;