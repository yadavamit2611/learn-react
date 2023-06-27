//header - logo , navbar list items, cart(Right side)
//body
// search bar
//restraunt list
// restraunt card - image, name, Rating, Cuisines,  price, address * many
//footer
// links, copyrights
import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";

const Title = () => // functional component
(
    <a href="/">
    <img id="logo" alt="foodvilla" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=740"></img>
    </a>
);

// Composing components
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

// config driven ui
const restaurantList = [
    {
        name: "Burger King",
        image: "https://www.in-n-out.com/ResourcePackages/INNOUT/content/images/menu/double-double-meal.png?package=INNOUT&v=2023",
        cuisines: ["Burger", "American"],
        key: "r1",
        rating: "4.2"
    },
    {
        name: "Pizza",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJ-madnJ894CUTTo1KcXDILrtKG7XKrpGrQ&usqp=CAU",
        cuisines: ["Pizza", "Italy"],
        key: "r2",
        rating: "4.0"
    },
    {
        name: "Noodles",
        image: "https://olo-images-live.imgix.net/ce/ce9f2d562e7c46cea57e1a32208d4c08.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1800&h=1800&fit=crop&fm=png32&s=9986359421b2d10c94084da689d11f34",
        cuisines: ["Noodles", "Japanese"],
        key: "r3",
        rating: "4.1"
    },
]

const RestrauntCard = ({name,image,cuisines,rating}) => 
{

//    const {name, cuisines, image, rating} = restraunt;
    return ( 
            <div className="card">
            <img alt={name} src={image}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{rating} Stars</h4>
        </div>
    );
}

const Body = () => 
{
    console.log(restaurantList.length)
    return (
        <div className="restaurant-list">
            {
                restaurantList.map((restaurant)=>
                {
                    return <RestrauntCard {...restaurant}/>;
                })
            }
        </div>
    );
};


const Footer = () => 
{
    return (
        <div id="footer">
            <h1>Footer</h1>
        </div>
    );
};

const AppLayout = () => 
{
    return (
        <>
        <Header />
        <Body />
        <Footer />
        </>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />); // self closing tag

