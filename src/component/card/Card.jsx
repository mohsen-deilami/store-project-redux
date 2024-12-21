import styles from "./card.module.css";
import { React, useEffect, useState } from "react";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { shortenText } from "./../../services/helper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItem , removeItem, increase,  decrease } from "../../features/CartSlice";

export default function Card({ product }) {
  const state=useSelector(store=>store.cart)
  const dispatch=useDispatch();
  const [count, setCount] = useState(0);

  return (
    <>
      {product ? (
        <div className={styles.card}>
          
          <Link to={`/products/${product.id}`} className={styles.link}>
        <img src={product.image} alt="" />
      </Link>

          <h2 key={product.id}>{shortenText(product.title)}</h2>
          <p>{product.price}$</p>
          <div className={styles.icons}>
          <button>
          <Link to={`/products/${product.id}`}>
            <TbListDetails className={styles.details} />
          </Link>
        </button>
            <div className={styles.baskets}>
              {count === 1 && (
                <button onClick={() => {dispatch(removeItem(product)) ;setCount((count) => count - 1);}}>
                  <MdDelete />
                </button>
              )}
              {count > 1 && (
                <button onClick={() => {dispatch(decrease(product)); 
                  setCount((count) => count - 1);}}>
                    -
                     </button>
              
              )}
              {count > 0 && <span>{count}</span>}

              {count === 0 ? (
                <button onClick={() => {dispatch(addItem(product)); 
                 setCount((count) => count + 1);}}>
                  <TbShoppingBagCheck />
                </button>
              ) : (
                <button onClick={() => {dispatch(increase(product)); setCount((count) => count + 1);}}>
                  +
                </button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
