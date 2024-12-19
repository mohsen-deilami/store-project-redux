import React from 'react'
import styles from './Header.module.css';
import { SlBasket } from "react-icons/sl";
import { useSelector } from 'react-redux';

function Header() {


  return (
    <div className={styles.header}>
      <h1>Shop Store</h1>
      <a >
      <SlBasket className={styles.icon}/>
  
       <span>1</span>
     
      </a>
    </div>
  )
}

export default Header
