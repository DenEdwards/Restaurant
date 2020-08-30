import React, { useState} from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function Contact(props){

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const mapStyle = {
        width: "500px",
        height: "400px"
    };

    function handleChange(event){
        const {name,value} = event.target;

        if(name === "firstName"){
            setState(prevVal => {
                return({
                    firstName: value,
                    lastName: prevVal.lastName,
                    email: prevVal.email,
                    message: prevVal.message
                });
            });
        }else if(name === "lastName"){
            setState(prevVal => {
                return({
                    firstName: prevVal.firstName,
                    lastName: value,
                    email: prevVal.email,
                    message: prevVal.message
                });
            });
        }else if(name === "email"){
            setState(prevVal => {
                return({
                    firstName: prevVal.firstName,
                    lastName: prevVal.lastName,
                    email: value,
                    message: prevVal.message
                });
            });
        }else if(name === "message"){
            setState(prevVal => {
                return({
                    firstName: prevVal.firstName,
                    lastName: prevVal.lastName,
                    email: prevVal.email,
                    message: value
                });
            });
        }
    }

    function submitForm(event){
        event.preventDefault()
        console.log("First: " + state.firstName + ", Last: " + state.lastName + ", email: " + state.email + ", message: " + state.message);
    }

    return(
        <div className="contact">
            <div className="map">
                <Map
                    google={props.google}
                    zoom={18}
                    initialCenter={{ lat: 39.133294, lng: -84.462043}}
                    style={mapStyle}
                >
                    <Marker
                        position={{ lat: 39.133294, lng: -84.462043}} />
                </Map>
            </div>
            <div className="contact-form">
                <form onSubmit={submitForm}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Fist Name*</label>
                            <input type="text" className="form-control" name="firstName" id="firstName" required onChange={handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label >Last Name*</label>
                            <input type="text" className="form-control" name="lastName" id="lastName" required onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="form-group col-md-12 reset">
                        <label>Email*</label>
                        <input type="email" className="form-control" name="email" id="email" required onChange={handleChange}></input>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label>Message*</label>
                            <textarea type="text" className="form-control" name="message" id="message" required onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-secondary" >Get in Touch</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: (``)
})(Contact);