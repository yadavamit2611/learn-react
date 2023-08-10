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
// Composing components

// config driven ui

const AppLayout = () => 
{
    return (
        //react fragments
        <> 
        <Header />
        <Body />
        <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); // self closing tag

