import { React } from "react";
import styles from "./Checkout.module.css";
import { useSelector } from "react-redux";
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
//import BasketCard from "../BasketCard/BasketCard";
import { Link } from "react-router-dom";
function Checkout() {
  const state = useSelector(state=>state.cart.selectedItems);
/*   const checkoutHandler=()=>{
    dispatch({ type: 'checkout'});
  } */
  return (
    <>
      {state.itemsCounter > 0 ? (
        <div className={styles.checkout}>
          <div className={styles.sidebar}>
            <div>
              <TbChecklist />
              Total :<span>{state.totalPrice} $</span>
            </div>
            <div>
              <FaHashtag />
              Quantity :<span>{state.itemsCounter}</span>
            </div>
            <div>
              <BsPatchCheck />
              Status :
              <span>{state.checkout === true ? "Complete" : "Pending..."}</span>
            </div>
            <Link to='/products'>
            <button onClick={()=>{
              checkoutHandler()}}>Checkout</button>
            </Link> 
          </div>
          <div className={styles.main}>
          {/*   {state.selectedItems.map((product) => (
           <BasketCard product={product} key={product.id}/>
            ))} */}
          </div>
        </div>
      ) : (
        <div className={styles.warn}>
          <p>
          There are no products in your shopping cart
            </p> 
            <Link to='/products'>
            <button>Back</button>
            </Link>  
        </div>
      )}
    </>
  );
}
export default Checkout;
