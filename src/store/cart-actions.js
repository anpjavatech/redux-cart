import { replaceCart } from "./cart";

export const sendCartData = (cart)=>{
    return async ()=>{

        try {
            const response = await fetch('https://redux-5fcfa-default-rtdb.firebaseio.com/cart.json', 
            {
                method:'PUT', 
                body:JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                    showCart: cart.showCart
                })
            });

            if(!response.ok){
                throw new Error('Sending cart data failed.');
            }
        }catch (error) {
            console.error(error);
        }
            
    }
}


export const fetchCartData = (cart)=>{
    return async (dispatch)=>{
        try {
            const response = await fetch('https://redux-5fcfa-default-rtdb.firebaseio.com/cart.json');

            if(!response.ok){
                throw new Error('Sending cart data failed.');
            }

            const data = await response.json();
            dispatch(replaceCart({
                items: data.items || [],
                totalQuantity: data.totalQuantity,
                showCart: data.showCart
            }));
        }catch (error) {
            console.error(error);
        }
    }
}