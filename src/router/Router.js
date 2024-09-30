import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Menu from "../menu/Menu";
import Cart from "../cart/Cart";
import Checkout from "../checkout/Checkout";
import Signup from "../auth/Signup";
import Aboutus from "../about/Aboutus";
import Admin from "../admin/Admin";
import Contact from "../about/Contact";

const Router = createBrowserRouter([

    {
        path: "/", 
        element: <Home />
    },
    {
        path: "/signup", 
        element: <Signup />
    },
    {
        path: "/menu", 
        element: <Menu />
    },
    {
        path: "/cart", 
        element: <Cart />
    },
    {
        path: "/checkout", 
        element: <Checkout />
    },
    {
        path: "/about", 
        element: <Aboutus />
    },
    {
        path: "/contact", 
        element: <Contact/>
    },
    {
        path: "/admin", 
        element: <Admin/>
    },

])

export default Router