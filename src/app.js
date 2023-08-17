//header - logo , navbar list items, cart(Right side)
//body
// search bar
//restraunt list
// restraunt card - image, name, Rating, Cuisines,  price, address * many
//footer
// links, copyrights
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import 'font-awesome/css/font-awesome.min.css';
// Composing components

// config driven ui
//any config can power the ui - json file
//could be stored in a backend
//swiggy - api call returns a config json which contains ui content


const AppLayout = () => 
{
    return (
        //react fragments
        <> 
        <Header />
        {/* <Body />
        <Footer /> */}
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); // self closing tag

