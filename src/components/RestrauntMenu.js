import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { euros } from "../utils/helper";
const RestrauntMenu = () => {
    // how to read a dynamic URL params
    const {resId} = useParams();

    const restaurant = useRestaurant(resId);

    const MenuContainer = ({primarySlug, brand, delivery, location, menu, restaurantPhoneNumber}) => {
        return (
            <div className="bg-slate-800 p-10 flex flex-col justify-center items-center">
                <div className="bg-white rounded-t-lg rounded-b-none p-5 w-6/12">
                    <h1 className="font-bold text-3xl">{brand?.name}</h1>
                    <img className="rounded-md shadow-xl" alt={primarySlug} src={brand?.headerImageUrl.replace("/{parameters}","")}></img>
                    <h2 className={delivery?.isOpenForOrder?"text-green-700 font-bold text-lg" : "text-red-700 font-bold text-lg"}>{delivery?.isOpenForOrder?"Open For Delivery":"Closed"}</h2>
                    <h3>{location?.streetName +" "+ location?.streetNumber + "\n" + location?.postalCode +" "+ location?.city }</h3>
                    <h3>📞 {restaurantPhoneNumber}</h3>
                </div>
                <div className="text-white text-bold w-6/12 bg-slate-950 text-4xl text-center">Menu</div>
                <div className="flex flex-row w-6/12">
                <div className="text-black text-left border-r-2 border-black rounded-b-lg w-6/12">
                    <h1 className="text-2xl font-bold text-center text-white bg-slate-500 ">Item</h1>
                    <ul className="p-10 bg-white border-r-2 rounded-bl-lg">
                    {
                        Object.values(menu?.products)?.map((elem,index) => {
                           return <li key={index}
                           >{index+1}. {elem?.name}</li>
                        })
                    }
                    </ul>
                </div>
                <div className="text-black text-center rounded-b-lg w-6/12">
                    <h1 className="text-2xl font-bold text-center text-white bg-slate-500 ">Price</h1>
                    <ul className="p-10 bg-white rounded-br-lg">
                    {
                        Object.values(menu?.products)?.map((elem,index) => {
                            const result = euros(String(elem?.variants[0]?.prices?.delivery));
                           return <li key={index}> {result.join("")} Є</li>
                        })
                    }
                    </ul>
                </div>
                </div>
            </div>
        )
    }

  return (!restaurant) ? <Shimmer />:(
    <MenuContainer key={restaurant?.primarySlug} {...restaurant}/>
  );
};

export default RestrauntMenu;