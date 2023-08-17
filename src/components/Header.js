import { useEffect, useState } from "react";
import { logoUrl } from "../constants";

const Title = () => // functional component
(
    <a href="/">
    <img id="logo" alt="foodvilla" src={logoUrl}></img>
    </a>
)
const Header = () => 
{
    const [isloggedIn, setIsLoggedIn] = useState(false);
    console.log("render");
    useEffect(() => {
        console.log("use effect")
    }, [isloggedIn]);
    return (
        <div className="header">
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
            <Title/>
            <div className="nav-items">
                <ul>
                    <li><i className="fa fa-home"></i>Home</li>
                    <li><i className="fa fa-info"></i>About</li>
                    <li><i className="fa fa-envelope"></i>Contact</li>
                    {
                        // only Js expression and statement
                        isloggedIn ? <button className="common" onClick={() => setIsLoggedIn(false)}><i className="fa fa-user"></i>Logout</button> 
                        : <button className="common" onClick={() => setIsLoggedIn(true)}><i className="fa fa-user"></i>Login</button>
                    }                    
                </ul>
            </div>
        </div>
    );
};
export default Header;
// export by default and export by name
//named import and default import