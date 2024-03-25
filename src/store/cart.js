import { createSlice } from "@reduxjs/toolkit";

const initialState = {items:[], cartToggle: false};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItems:(state, action)=>{
            state.items = state.items.push(action.payload.items);
        },
        removeItems:(state, action)=>{
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        cartToggle: (state)=>{
            state.showCart = !state.showCart;
        }

    }
});

export const {addItems, removeItems, cartToggle} = cartSlice.actions;
export default cartSlice.reducer;