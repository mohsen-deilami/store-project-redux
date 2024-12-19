import React from 'react'
import styles from './Homepage.module.css'
import Sidebar from '../../component/sidebar/Sidebar'
import Searchbar from '../../component/searchbar/Searchbar'
import Products from '../../component/products/Products'
export default function Homepage() {
    const searchHandler=()=>{
        console.log('search');
        
    }

    const categotyHandler=()=>{
        console.log('select category');
        
    }

  return (
    <div>
      <div className={styles.container}>
      <Searchbar searchHandler={searchHandler} />
      <div className={styles.main}>
       <div className={styles.sidebar}>
          <Sidebar categotyHandler={categotyHandler} />
        </div> 
        <Products/>
      
      </div>
    </div>
    </div>
  )
}
