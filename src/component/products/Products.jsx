import React, { useEffect } from "react";
import styles from "./products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import Card from "../card/Card";

export default function Products() {
  const products = useSelector((state) => state.products);
  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {products.products.data.length ?
           products.products.data.map((product) => (
              <Card product={product} key={product.id} />
            ))
          : null}
      </div>
    </div>
  );
}
