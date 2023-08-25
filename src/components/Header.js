import { useEffect, useState } from "react";
import { logoUrl } from "../constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => // functional component
(
    <a href="/">
    <img className="h-28 p-2 sm:flex-shrink-0 mix-blend-multiply" alt="foodvilla" src={logoUrl}></img>
    </a>
)
const Header = () => 
{
    const isOnline = useOnline();
    return (
        <div className="flex justify-between sm:w-screen sm:bg-pink-50">
            {
                // {title} if javascript to be used
                // <Title /> if element is to be used
                // can use as a function to {title()}
                // is jsx mandatory ? no! 
                // is es6 mandatory? no!
                // is typescript mandatory ? no!
                // react is a library gives you lot of things
                // no restrictions its very flexible
            }
            <div>
                <Title/>
            </div>
            <div className="nav-items">
                <ul className="flex m-10 gap-1">
                    <li><i className="fa fa-home px-2"></i><Link to="/">Home</Link></li>
                    <li><i className="fa fa-info px-2"></i><Link to="/about">About</Link></li>
                    <li><i className="fa fa-envelope px-2"></i><Link to="/contact">Contact</Link></li>
                    <li><i className="fa fa-car px-2"></i><Link to="/instamart">Instamart</Link></li>
                    {/* <li><i className="fa fa-cart-shopping"></i><Link to="/cart">Cart</Link></li> */}
                    <li>{isOnline ? '🟢' : '🟥'}<i className="fa fa-user"></i><Link to="/login">Log In</Link></li>                 
                </ul>
            </div>
        </div>
    );
};
export default Header;
// export by default and export by name
//named import and default import