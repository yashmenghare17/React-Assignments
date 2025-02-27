import { createRoot } from "react-dom/client";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
const root = createRoot(document.getElementById('root'));
const path = window.location.pathname;
    if(path=='/'){
       root.render(<Home/>);
    }else if(path=='/aboutus'){
        root.render(<AboutUs/>);
    }else if(path=='/contactus'){
        root.render(<ContactUs/>);
    }else{
        root.render(<h1>Page Not Found</h1>);
    }