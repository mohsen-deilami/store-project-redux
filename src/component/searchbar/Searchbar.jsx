import {  useState } from 'react';
import styles from './Searchbar.module.css';
import { FaSearch } from "react-icons/fa";
function Searchbar({searchHandler }) {
  const [searchValue , setSearchValue]=useState('');
  return (
    <div className={styles.searchbar}>
    <input   type="text"   value={searchValue}   placeholder="search..." onChange={(event) => {
        setSearchValue(event.target.value.toLowerCase());
      }}
    />
    <button onClick={() => searchHandler(searchValue)}>
      <FaSearch />
    </button>
  </div>
  )
}

export default Searchbar

