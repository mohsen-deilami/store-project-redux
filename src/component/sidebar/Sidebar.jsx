import { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import { TbCategoryMinus } from "react-icons/tb";
import api from "./../../services/services";

function Sidebar() {
/*   const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/products/categories");
        setCategories(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCategories();
  }, []); */
  return (
    <>
      <div className={styles.sidebar}>
        <button>
          <i> <TbCategoryMinus /> </i>
          Categories
        </button>
        <ul >
         {/*  <li   onClick={() =>categotyHandler("all") } className={!query.category  ? styles.active : null}  > */}
          <li    >
            All
          </li>
         {/*  {categories.map((category, index) => (
            <li  key={index}   onClick={() => categotyHandler(category) }
             className={category === query.category ? styles.active : null}
            >
              {category[0].toUpperCase() + category.slice(1)}
            </li>
          ))} */}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
