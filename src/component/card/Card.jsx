import styles from "./card.module.css";
import { React, useEffect, useState } from "react";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { shortenText } from "./../../services/helper";
export default function Card({ product }) {
  const [count, setCount] = useState(0);
  console.log( product);

  const clickHandler = (actionType) => {
    switch (actionType) {
      case "ADD_PRODUCT": {
        dispatch({ type: "ADD_PRODUCT", payload: product });
        setCount((count) => count + 1);
        return;
      }
      case "DECREASE_PRODUCT": {
        setCount((count) => count - 1);
        dispatch({ type: "DECREASE_PRODUCT", payload: product });
        return;
      }
      case "INCREASE_PRODUCT": {
        setCount((count) => count + 1);
        dispatch({ type: "INCREASE_PRODUCT", payload: product });
        return;
      }
      case "REMOVE_PRODUCT": {
        setCount((count) => count - 1);
        dispatch({ type: "REMOVE_PRODUCT", payload: product });
        return;
      }
      default:
        throw new Error("somthing wnt wrong");
    }
  };
  return (
    <>
      {product ? (
        <div className={styles.card}>
          <img src={product.image} alt="" />

          <h2 key={product.id}>{shortenText(product.title)}</h2>
          <p>{product.price}$</p>
          <div className={styles.icons}>
            <button>
              <TbListDetails className={styles.details} />
            </button>
            <div className={styles.baskets}>
              {count === 1 && (
                <button onClick={() => clickHandler("REMOVE_PRODUCT")}>
                  <MdDelete />
                </button>
              )}
              {count > 1 && (
                <button onClick={() => clickHandler("DECREASE_PRODUCT")}>
                  -
                </button>
              )}
              {count > 0 && <span>{count}</span>}

              {count === 0 ? (
                <button onClick={() => clickHandler("ADD_PRODUCT")}>
                  <TbShoppingBagCheck />
                </button>
              ) : (
                <button onClick={() => clickHandler("INCREASE_PRODUCT")}>
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
