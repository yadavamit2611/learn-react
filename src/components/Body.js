import { useState, useEffect } from "react";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { HEADER } from "../constants";
import useOnline from "../utils/useOnline";

const Body = () => 
{
    const [searchText, setSearchText] = useState(''); // to create state variables this returns an array the first variable of array is variable name
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [locationText, setLocationText] = useState("saarbrücken");
    const [btnClicked, setBtnClicked] = useState(0);	
    const [status, setStatus] = useState(false);  

    useEffect(() => {
        getLocation();
/*         return () => { 
            console.log("this is unmount-------- from body");
            in order to unmount that do something on leaving the page
        }; */
    }, [btnClicked]);    

    async function getLocation(){
        try {
            const data = await fetch("https://api.geoapify.com/v1/geocode/search?text="+locationText+"&apiKey=f16359af8a6f405295f7083f4dda872c");
            const jsonData = await data.json();
            const locationData = jsonData?.features[0]?.properties;
            getRestaurants(locationData);            
        } catch (error) {
            console.log(error);
        }
    }

    async function getRestaurants(props){
        try {
            let postCode = "";
            if(!props.postcodes){
                postCode = props.postcode;
            }else{
                postCode = props.postcodes[0];
            }

            const data = await fetch("https://cw-api.takeaway.com/api/v33/restaurants?lat="+props?.lat+"&lng="+props?.lon+"&postalCode="+postCode, HEADER);
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
            console.log(restaurantArray);   
            setStatus(false);        
        } catch (error) {
            console.log(error);
        }
    }
        // avoid component rendering, not render component(Early)
        // if(!allRestaurants) return null;
    const isOnline = useOnline();
    if(!isOnline){
        return <h1>🔴You are offline... Please check your internet</h1>
    }      

     return allRestaurants?.length===0 ? 
     <Shimmer/> :
     (
            <div className="flex flex-col 
            items-center justify-center bg-slate-600">
            <div className="p-10 bg-slate-800 rounded-lg m-5 shadow-lg">
                <input type="text" className="text-lg focus:outline-green-500 p-1 m-1 shadow-lg" placeholder="Search Restaurant.." value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                        if(e.target.value.length>0){
                            const data = filterData(searchText,allRestaurants);
                            setFilteredRestaurants(data); 
                        }else{
                            setFilteredRestaurants(allRestaurants);
                        }                
                    }}>    
                </input>
                <input type="text" className="text-lg p-1 m-1 focus:outline-green-500 shadow-md" placeholder="Search via location.." value={locationText} onChange={(e) => setLocationText(e.target.value)}></input>
                <button className="p-2 mx-1 bg-green-700 hover:bg-green-800 text-white rounded-md shadow-md" onClick={() => {
                    setBtnClicked(btnClicked + 1);
                    setStatus(true);
                }}>{status?"loading":"Change location"}</button>
            </div>
            <div className="w-6/12 shadow-2xl bg-slate-500 rounded-lg my-5">
                {
                    filteredRestaurants?.length === 0 ? <h1>404 error : No Restaurant found</h1> :  filteredRestaurants?.map((restaurant)=>
                    { 
                        return (<Link key={restaurant?.primarySlug} to={"/restaurant/"+restaurant?.primarySlug}>
                            <RestrauntCard {...restaurant} key={restaurant?.id}/>
                            </Link>);
                    }) 
                }
            </div>
            </div>
        )
};
export default Body;