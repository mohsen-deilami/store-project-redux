import React from "react";
import styles from "./products.module.css";
import Card from "../card/Card";

export default function Products({displayed}) {
    return (
    <div className={styles.container}>
      <div className={styles.products}>
             {
        displayed.length ?
        displayed.map((product) => (
              <Card product={product} key={product.id} />
            ))
          : null}
      </div>
    </div>
  );
}
