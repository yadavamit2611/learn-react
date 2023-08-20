import { useState, useEffect } from "react";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

//hook is just a function
//what is state
//what is hook
// where do you get hook - function from
// react is fast because of its dom manipulation as its an
// expensive operation
 
const Body = () => 
{
    //searchText is local search variable
    //avoid rendering component - optional chaining
    const [searchText, setSearchText] = useState(''); // to create state variables this returns an array the first variable of array is variable name
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    useEffect(() => { 
        getRestaurants();
        //console.log("call this when dependency is changed");
    }, []);

// callback function will be called not immediately but only when useEffect wants to call it
// component re-renders everytime state changes or prop changes
// if dont want to call it on every re-render then pass a dependency array
// if want to call useEffect everytime search text changes.
// this means useEffect is dependent on searchText
// empty dependency array => once after render
// dep array [searchText] => once after initial render + everytime after render my searchtext changes
    async function getRestaurants(){
        try {
            const data = await fetch("https://cw-api.takeaway.com/api/v33/restaurants?deliveryAreaId=1216851&postalCode=66111&lat=49.24106&lng=6.991020000000001&limit=0&isAccurate=true&filterShowTestRestaurants=false", {
                "headers": {
                  "accept": "application/json, text/plain, */*",
                  "accept-language": "en",
                  "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
                  "sec-ch-ua-mobile": "?0",
                  "sec-ch-ua-platform": "\"Windows\"",
                  "sec-fetch-dest": "empty",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-site": "cross-site",
                  "x-country-code": "de",
                  "x-language-code": "en",
                  "x-requested-with": "XMLHttpRequest",
                  "x-session-id": "1ab4962f-6fea-4e5d-ac5c-e6e2e3cd55ee"
                },
                "referrer": "https://www.lieferando.de/",
                "referrerPolicy": "strict-origin",
                "body": null,
                "method": "GET",
                "mode": "cors",
                "credentials": "omit"
              });
            const json = await data.json();
            const restaurantArray = Object.values(json?.restaurants).map(restaurant => ({
               id : restaurant?.id,  
               primarySlug: restaurant?.primarySlug,
               indicators: restaurant?.indicators,
               priceRange: restaurant?.priceRange,
               popularity: restaurant?.popularity,
               brand: restaurant?.brand,
               rating: restaurant?.rating,
               cuisine : restaurant?.cuisineTypes,
               location : restaurant?.location,
               shippingInfo : restaurant?.shippingInfo
    
            }));
            setAllRestaurants(restaurantArray);
            setFilteredRestaurants(restaurantArray);            
        } catch (error) {
            console.log(error);
        }
    }
    
    
    const filterRestaurants = (searchText, restaurants) => {
        //need to filter restaurant list
        // update the state - restaurant variable
        if(searchText){
            return restaurants.filter((restaurant) => restaurant?.brand?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
        }else{
            return restaurants;
        }
    }; 
        // avoid component rendering, not render component(Early)
        // if(!allRestaurants) return null;


     return allRestaurants?.length===0 ? 
     <Shimmer/> :
     (
            <>
            <div className="search-bar">
                <input type="text" className="search-input" placeholder="Search Food,Restaurant,location.." value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
                <button className="searchBtn" onClick={
                    () => {
                        const data = filterRestaurants(searchText,allRestaurants);
                        setFilteredRestaurants(data);
                    }
                    }>search</button>
            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants?.length === 0 ? <h1>404 error : No Restaurant found</h1> :  filteredRestaurants?.map((restaurant)=>
                    { 
                        return (<Link to={"/restaurant/"+restaurant?.primarySlug}><RestrauntCard {...restaurant} key={restaurant.id}/></Link>);
                    }) 
                }
            </div>
            </>
        )
};
export default Body;