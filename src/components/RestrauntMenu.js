import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { euros } from "../utils/helper";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestrauntMenu = () => {
    // how to read a dynamic URL params
    const {resId} = useParams();
    const [event, setEvent] = useState("add");

    const restaurant = useRestaurant(resId);
    const dispatch = useDispatch();

    const MenuContainer = ({primarySlug, brand, delivery, location, menu, restaurantPhoneNumber}) => {
        return (
            <div className="bg-slate-800 p-10 flex flex-col justify-center items-center text-center">
                <div className="bg-white rounded-t-lg rounded-b-none p-5 w-8/12">
                    <h1 className="font-bold text-3xl">{brand?.name}</h1>
                    <img className="rounded-md shadow-xl" alt={primarySlug} src={brand?.headerImageUrl.replace("/{parameters}","")}></img>
                    <h2 className={delivery?.isOpenForOrder?"text-green-700 font-bold text-lg" : "text-red-700 font-bold text-2xl"}>{delivery?.isOpenForOrder?"Open For Delivery":"Closed"}</h2>
                    <h3 className="text-xl">{location?.streetName +" "+ location?.streetNumber + "\n" + location?.postalCode +" "+ location?.city }</h3>
                    <h3 className="text-xl">📞 {restaurantPhoneNumber}</h3>
                </div>
                <div className="text-white text-bold w-8/12 bg-slate-950 text-4xl text-center">Menu</div>
                <div className="w-8/12 bg-white flex flex-col items-center rounded-b-lg">
                    <div className="text-black text-center w-3/6">
                        <ul className="p-10 bg-whit">
                        {
                            Object.values(menu?.products)?.map((elem,index) => {
                                const result = euros(String(elem?.variants[0]?.prices?.delivery));
                            return <div key={index+1} className="flex flex-row justify-end">
                                    <li className="p-5 text-xl" key={index}> {index+1}.{elem.name} {result.join("")} Є</li>
                                    <button className="mx-5 my-2 bg-green-400 rounded-lg w-20 h-10 text-3xl" onClick={() => dispatch(addItem(elem))}>+</button>
                                    <button className="mx-5 my-2 bg-red-400 rounded-lg w-20 h-10 text-3xl" onClick={() => dispatch(removeItem(elem))}>-</button>
                                    </div>
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