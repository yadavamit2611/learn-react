import { createSlice } from "@reduxjs/toolkit";
import { split } from "postcss/lib/list";

const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearCart: (state) => {
            state.items = []; // takes a state and manipulate it, cannot use return here
        },
        removeItem: (state, action) => {
            const deleteIndex = state.items.indexOf(action.payload);
            if(deleteIndex !== -1){
                state.items.splice(deleteIndex ,1);
            }else{
                state.items;
            }
           
        }
    }
});
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
// modify our cart using reducers