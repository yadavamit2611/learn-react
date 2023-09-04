import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
   reducer:{
    cart: cartSlice,
   } 
});
export default store;

/* 
create store
configureStore() - rtk

provide my store to app
<Provider store={store}> - import from react-redux

slice
- createSlice({
    name: "",
    initialState: [],
    reducers : {
        addItem : (state,action) => {
            state.items = action.payload;
        }, // actions and reducer functions where addItem is action and arrow function is function which will modify
        removItem : () => {
            state.items = action.payload * 2;
        }
    }
}) - RTK

in order to export
export const {addItem, removeItem} = cardSlice.actions;
export default cardSlice.reducer;

in the end put the slice in the reducers which will get added in the store
{
    reducer : {
         
    }
}

*/