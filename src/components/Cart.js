import { useDispatch, useSelector } from "react-redux"
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector(store => store?.cart?.items);
  const dispatch = useDispatch();

  console.log(cartItems);
  return (
    <div className="bg-slate-600 text-white">
      <div className="p-5 m-5">
        <div className="flex flex-row justify-center">
          <h1 className="text-center text-3xl font-bold">Cart Items - {cartItems.length}</h1>
          <button className="mx-5 p-2 bg-teal-500 text-xl rounded-md" onClick={() => dispatch(clearCart())} >Empty Cart</button>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center">
          {
            cartItems.map((elem, index) => <FoodItem key={index + 1} {...elem}></FoodItem>)
          }
        </div>
      </div>
    </div>
  )
}
export default Cart