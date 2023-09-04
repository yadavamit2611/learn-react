import { useEffect, useState, useContext } from "react";
import { logoUrl } from "../constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";
const Title = () => // functional component
(
    <a href="/">
    <img className="h-48 p-2 mix-blend-multiply sm:h-32 sm:min-w-max" alt="foodvilla" src={logoUrl}></img>
    </a>
)
const Header = () => 
{
    const isOnline = useOnline();
    const {user, email} = useContext(UserContext);
    const cartItems = useSelector(store => store?.cart?.items);
    console.log(cartItems);
    return (
        <div className="flex flex-col bg-slate-800 justify-center items-center sm:flex-row sm:bg-white">
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
            <div className="bg-white border-0 rounded-full">
                <Title/>
            </div>
            <div className="bg-slate-800 text-white w-full sm:bg-white sm:text-black">
                <ul className="flex flex-col text-2xl text-center gap-1 m-2 sm:flex-row sm:text-xl">
                    <li className="bg-slate-900 p-5 sm:bg-white"><i className="fa fa-home px-2"></i><Link to="/">Home</Link></li>
                    <li className="bg-slate-900 p-5 sm:bg-white"><i className="fa fa-info px-2"></i><Link to="/about">About</Link></li>
                    <li className="bg-slate-900 p-5 sm:bg-white"><i className="fa fa-envelope px-2"></i><Link to="/contact">Contact</Link></li>
                    <li className="bg-slate-900 p-5 sm:bg-white"><i className="fa fa-car px-2"></i><Link to="/instamart">Instamart</Link></li>
                    <li className="bg-slate-900 p-5 sm:bg-white"><i className="fa fa-shopping-basket"></i><Link to="/cart">Cart {cartItems?.length} items</Link></li>
                    <li className="bg-slate-900 p-5 sm:bg-white">{isOnline ? '🟢' : '🟥'}
                    <i className="fa fa-user"></i><Link to="/login">Log In</Link></li>                 
                </ul>
            </div>
        </div>
    );
};
export default Header;
// export by default and export by name
//named import and default import