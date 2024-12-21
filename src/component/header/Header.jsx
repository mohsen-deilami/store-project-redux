import React from 'react'
import styles from './Header.module.css';
import { SlBasket } from "react-icons/sl";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Header() {
const state = useSelector(store =>store.cart);

  return (
    <div className={styles.header}>
      <h1>Shop Store</h1>
      <Link to="/checkout">
      <SlBasket className={styles.icon}/>
      {!!state.itemsCounter  &&
       <span>{state.itemsCounter}</span>
       } 
      </Link>
    </div>
  )
}

export default Header
