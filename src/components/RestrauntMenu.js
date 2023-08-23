import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestrauntMenu = () => {
    // how to read a dynamic URL params
    const {resId} = useParams();
    
    const restaurant = useRestaurant(resId);

    const MenuContainer = ({primarySlug, brand, delivery, location, menu, restaurantPhoneNumber}) => {
        return (
            <div className="menu-list">
                <div>
                    <h1>{brand?.name}</h1>
                    <img alt={primarySlug} width={500} height={150} src={brand?.headerImageUrl.replace("/{parameters}","")}></img>
                    <h2>{delivery?.isOpenForOrder?"Open For Delivery":"Closed"}</h2>
                    <h3>{location?.streetName +" "+ location?.streetNumber + "\n" + location?.postalCode +" "+ location?.city }</h3>
                    <h3>Contact : {restaurantPhoneNumber}</h3>
                </div>
                <div>
                    <h1 className="title">Menu</h1>
                    <ul>
                    {
                        Object.values(menu?.products)?.map((elem,index) => {
                            return <li key={index}>{elem?.name}</li>
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }

  return (!restaurant) ? <Shimmer />:(
    <MenuContainer key={restaurant?.primarySlug} {...restaurant}/>
  );
};

export default RestrauntMenu;