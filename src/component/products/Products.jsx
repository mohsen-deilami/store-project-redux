import React, {useState, useEffect } from "react";
import styles from "./products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import Card from "../card/Card";
import { useSearchParams } from "react-router-dom";
import { searchProducts, selectCategory, createQueryObject ,initialQuery} from "../../services/helper";

export default function Products() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(initialQuery(searchParams)) ;   //fetch query string from url
  }, [products]);

  useEffect(() => {
    setSearchParams(query); // add query string to url
    let finalProducts = searchProducts(products, query.searchValue);
    finalProducts = selectCategory(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  const categotyHandler = category =>  setQuery(query => createQueryObject(query, { category }) );
  const searchHandler = searchValue => setQuery(query => createQueryObject(query, { searchValue }) );
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {
        products.products.data ?
           products.products.data.map((product) => (
              <Card product={product} key={product.id} />
            ))
          : null}
      </div>
    </div>
  );
}
