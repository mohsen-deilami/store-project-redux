import React , {useState, useEffect } from 'react'
import styles from './Homepage.module.css'
import Sidebar from '../../component/sidebar/Sidebar'
import Searchbar from '../../component/searchbar/Searchbar'
import Products from '../../component/products/Products'
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";import { fetchProducts } from "../../features/productSlice";
import { searchProducts, selectCategory, createQueryObject ,initialQuery} from "../../services/helper";
import Loader from "../../pages/loader/Loader";
export default function Homepage() {
  const {products,loading} = useSelector((state) => state.product);
    const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
    
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
    <div>
       {loading && <Loader />}
      <div className={styles.container}>
      <Searchbar searchHandler={searchHandler} />
      <div className={styles.main}>
       <div className={styles.sidebar}>
          <Sidebar categotyHandler={categotyHandler} query={query}/>
        </div> 
        <Products displayed={displayed}/>
      
      </div>
    </div>
    </div>
  )
}
