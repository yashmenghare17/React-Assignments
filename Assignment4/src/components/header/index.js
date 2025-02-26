import React from "react";
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/aboutus">About us</Link></div>
            <div><Link to="/contactus">Contact us</Link></div>
        </div>
    );
}
export default Header;