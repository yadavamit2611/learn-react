import { useState } from "react";
import { restaurantList } from "../Config";
import RestrauntCard from "./RestaurantCard";

//hook is just a function
//what is state
//what is hook
// where do you get hook - function from
const Body = () => 
{
    //searchText is local search variable
    const [searchText, setSearchText] = useState(); // to create state variables this returns an array the first variable of array is variable name
    const [btnClick, setBtnClicked] = useState(0);
    return (
        <>
        <div>
            <input type="text" className="search-input" placeholder="Search Item" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
            <button onClick={() => restaurantList.filter((restaurant)=>restaurant.name.includes(searchText))}>search</button>
        </div>
        <div className="restaurant-list">
            {
                restaurantList.map((restaurant)=>
                {
                    return <RestrauntCard {...restaurant}/>;
                }) 
            }
        </div>
        </>
    );
};
export default Body;