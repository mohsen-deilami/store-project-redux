import React from 'react'
import styles from './Basket.module.css'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import {removeItem, increase, decrease} from './../../features/CartSlice'
function Basket({product}) {
   
    const state=useSelector(store=>store.cart)
    const dispatch=useDispatch();
  
   
  return (
    <div className={styles.items} key={product.id}>
    <div className={styles.item}>
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <div className={styles.icons}>
        <div className={styles.baskets}>
            <div className={styles.baskets}>
          {product.quantity === 1 ? ( 
              <button onClick={()=>dispatch(removeItem(product))}>
                <MdDelete />
              </button>
          ):(
             <button onClick={()=>dispatch(decrease(product))}>-</button>
            )}
            <span>{product.quantity}</span>
            <button onClick={()=>dispatch(increase(product))}>+</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Basket
