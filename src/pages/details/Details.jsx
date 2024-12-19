import React, { useEffect, useState } from "react";
import styles from "./Details.module.css";
import { Link, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import api from "../../services/services";
import { CgInfinity } from "react-icons/cg";
import { FiArrowUpRight } from "react-icons/fi";
import Loader from './../loader/Loader'

function Details() {
  const [product, setProduct] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
      const response = await api.get(`/products/${params.id}`);
      setProduct(response.data)
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);
console.log(product);

  return (
    <div className={styles.details}>
      {!! product ? (

      <>
      <div className={styles.sidebar}>
        <img   src={product.image}   alt="" />
      </div>
      <div className={styles.infos}>
        <h2>{product.title}</h2>
        <p>
         {product.description}
        </p>
        <div className={styles.icons}>
          <div className={styles.left}>
            <i>
              <CgInfinity fill="#2bce56" stroke="#2bce56" strokeWidth="3"/>
              <span> {product.category}</span>
            </i>
            <i>
              <FiArrowUpRight fill="#2bce56" stroke="#2bce56" strokeWidth="3"/>
              <span>$ {product.price}</span>
            </i>
          </div>
          <div className={styles.right}>
            <Link to="/homepage">
            <i>
              <FaLongArrowAltLeft />
            </i>
              Back to shop
            </Link>
          </div>
        </div>
      </div>
      </>
        ):(<Loader/>)
      }
    </div>
  );
}

export default Details;
