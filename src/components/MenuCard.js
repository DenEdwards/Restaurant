import React from "react";

function MenuCard(props){
    return(
        <div className="menu-card">
            <img src={require("../style/images/"+props.image+".jpg")} alt={props.image} ></img>
            <div className="card-des">
                <strong>{props.name} - ${props.price}</strong>
                <br></br>
                {props.description}
            </div>
            
        </div>
    );
};
export default MenuCard;