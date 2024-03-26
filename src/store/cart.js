import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[], 
        totalQuantity: 0,
        showCart: false,
    },
    reducers:{
        addItems:(state, action)=>{
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItems:(state, action)=>{
            const idToRemove = action.payload;
            const itemToRemove = state.items.find(item => item.id === idToRemove);
            console.log(itemToRemove);
            state.totalQuantity--;
            if(itemToRemove.quantity===1){
                state.items = state.items.filter(item => item.id !== idToRemove);
            }else{
                itemToRemove.quantity--;
                itemToRemove.totalPrice = itemToRemove.totalPrice - itemToRemove.price;
            }
        },
        cartToggle: (state)=>{
            state.showCart = !state.showCart;
        }

    }
});

export const {addItems, removeItems, cartToggle} = cartSlice.actions;
export default cartSlice.reducer;