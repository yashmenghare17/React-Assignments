import { createRoot } from "react-dom/client";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/aboutus',
        element:<AboutUs/>
    },
    {
        path:'/contactus',
        element:<ContactUs/>
    }
]);
const App = () =>{
    return(
        <>
            <Home/>
        </>
    )
}
const root = createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={router}>
            <App/>
        </RouterProvider>
);