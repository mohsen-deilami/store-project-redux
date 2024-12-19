import React from 'react'
import styles from './Homepage.module.css'
import Sidebar from '../../component/sidebar/Sidebar'
import Searchbar from '../../component/searchbar/Searchbar'
import Products from '../../component/products/Products'
export default function Homepage() {
  return (
    <div>
      <div className={styles.container}>
      <Searchbar searchHandler={searchHandler} />
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <Sidebar categotyHandler={categotyHandler} query={query}/>
        </div>
        {!displayed.length && <Loader />}
        {
          <div className={styles.products}>
            {displayed.map((product) => (
              <Card key={product.id} product={product} query={query}/>
            ))}
          </div>
        }
      </div>
    </div>
    </div>
  )
}
