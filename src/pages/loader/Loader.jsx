import React from 'react'
import styles from './Loader.module.css'
import {RotatingLines} from 'react-loader-spinner'
function Loader() {
  return (
    <div className={styles.loader}>
     <RotatingLines width='10rem' height='10rem' strokWidth='3' strokColor='#2bce56'/>
    </div>
  )
}

export default Loader
