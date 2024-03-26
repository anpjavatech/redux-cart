import classes from './CartButton.module.css';
import {cartToggle} from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {

  const totalQuantity = useSelector((state)=> state.cart.totalQuantity);
  const dispatch = useDispatch();
  function handleCartToggle(){
    dispatch(cartToggle());
  }

  return (
    <button className={classes.button} onClick={handleCartToggle} >
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
