import { useEffect, useState } from "react";
import { logoUrl } from "../constants";
import { Link } from "react-router-dom";

const Title = () => // functional component
(
    <a href="/">
    <img id="logo" alt="foodvilla" src={logoUrl}></img>
    </a>
)
const Header = () => 
{
    const [isloggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        sessionStorage.setItem("state",setIsLoggedIn(isloggedIn));
    }, [isloggedIn]);
    return (
        <section className="header">
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
                <ul>
                    <li><i className="fa fa-home"></i><Link to="/">Home</Link></li>
                    <li><i className="fa fa-info"></i><Link to="/about">About</Link></li>
                    <li><i className="fa fa-envelope"></i><Link to="/contact">Contact</Link></li>
                    {/* <li><i className="fa fa-cart-shopping"></i><Link to="/cart">Cart</Link></li> */}
                    {
                        // only Js expression and statement
                        isloggedIn ? <li onClick={() => setIsLoggedIn(false)}><i className="fa fa-user"></i><Link to="/">Log Out</Link></li>
                        : <li onClick={() => setIsLoggedIn(true)}><i className="fa fa-user"></i><Link to="/login">Log In</Link></li>
                    }                    
                </ul>
            </div>
        </section>
    );
};
export default Header;
// export by default and export by name
//named import and default import