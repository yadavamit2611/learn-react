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
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestrauntMenu from "./components/RestrauntMenu";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//function we get from react router dom - will help us create routing
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
        {/* outlet will be filled by children */}
        <Outlet />
        <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [{
            path: "/",
            element: <Body />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/restaurant/:resId",
            element: <RestrauntMenu />,
        }
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); // self closing tag

