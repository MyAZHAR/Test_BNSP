import React from "react";
import { Link } from "react-router-dom";


const NavigationBar = () =>{
        return (
            <nav className="nav">
                <Link to="/home">Home</Link>
                <Link to="/choose">Choose</Link>
                <Link to="/form">Form</Link>
            </nav>
        )
    
}

export default NavigationBar;