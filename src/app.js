//header - logo , navbar list items, cart(Right side)
//body
// search bar
//restraunt list
// restraunt card - image, name, Rating, Cuisines,  price, address * many
//footer
// links, copyrights
import React, { Suspense, lazy, useState } from "react";
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
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
//function we get from react router dom - will help us create routing
import 'font-awesome/css/font-awesome.min.css';
import store from "./utils/store";
// Composing components
const Instamart = lazy(() => import("./components/Instamart"));
// config driven ui
//any config can power the ui - json file
//could be stored in a backend
//swiggy - api call returns a config json which contains ui content

const AppLayout = () => 
{
    const [user, setUser] = useState({name:"Amit",email:"thisisamit.kumar21@gmail.com"});
    
    return (
        //react fragments
        <Provider store={store}>
            <UserContext.Provider value={{user: user, setUser: setUser}}>
            <Header />
            {/* outlet will be filled by children */}
            <Outlet />
            <Footer />
            </UserContext.Provider>
        </Provider>


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
            element: <About />,
            children: 
            [
                {
                    path: "profile",
                    element: <Profile name={"Amit"} />
                }
            ]
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
        },
        {
            path: "/instamart",
            element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
        }
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); // self closing tag

