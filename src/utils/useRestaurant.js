import { useEffect, useState } from "react";
import { HEADER, FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
    const [restraunt, setRestaurant] = useState();

    useEffect(() => {
        getRestaurantInfo(); 
    },[]); 
    
    async function getRestaurantInfo(){
        try {
            const infoData = await fetch(FETCH_MENU_URL+resId, HEADER);
            const jsonData = await infoData.json(); 
            console.log(jsonData);
            setRestaurant(jsonData);    
        } catch (error) {
            console.error(error);
        }

    };    
    
    return restraunt;
} 

export default useRestaurant;