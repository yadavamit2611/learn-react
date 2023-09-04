import { useDispatch } from "react-redux";
import { euros } from "../utils/helper";
import { removeItem } from "../utils/cartSlice";

const FoodItem = (elem) => 
{
    const {name,imageUrl,description} = elem;
    const dispatch = useDispatch();

    const handleRemoveItem = (element) => {
        dispatch(removeItem(element))
    }
//    const {name, cuisines, image, rating} = restraunt;
    return ( 
            <div className="rounded-md bg-white text-black shadow-lg p-5 m-5 w-3/12 h-fit">
            <div className="flex flex-row justify-between">
            <img alt={name} src={imageUrl?.replace("/{parameters}","")}/>
            <button className="bg-orange-200 text-2xl p-1 w-16 h-16 rounded-md" onClick={() => handleRemoveItem(elem)}> - </button>       
            </div>
           <div className="font-bold text-2xl">{name}</div> 
            <div className="text-xl">Ingredients ( {description.join(",")})</div>  
            </div>
    );
}
export default FoodItem; 