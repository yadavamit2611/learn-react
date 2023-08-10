import { logoUrl } from "../Config";

const Title = () => // functional component
(
    <a href="/">
    <img id="logo" alt="foodvilla" src={logoUrl}></img>
    </a>
);
const Header = () => 
{
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
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;
// export by default and export by name
//named import and default import