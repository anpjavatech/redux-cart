import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial=true;

function App() {

const toggle = useSelector((state)=>state.cart.showCart);
const isChanged = useSelector((state)=>state.cart.isChanged);
const cart = useSelector((state)=> state.cart);
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(fetchCartData())
}, [dispatch]);


useEffect(()=>{
  if(isInitial){
    isInitial=false;
    return;
  }

  if(isChanged){
    dispatch(sendCartData(cart))
  }
}, [cart, isChanged, dispatch]);

  return (
    <Layout>
      {toggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
