import React from "react";
import Home from "../../pages/home";
import AboutUs from "../../pages/aboutus";
import ContactUs from "../../pages/contactus";
const Header = () =>{
    return(
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <div><a href="/">Home</a></div>
            <div><a href="/aboutus">About us</a></div>
            <div><a href="/contactus">Contact us</a></div>
        </div>
    );
}
export default Header;