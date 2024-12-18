import React, { useEffect } from 'react'
import style from './products.module.css'
import { useDispatch , useSelector } from 'react-redux'
import { fetchProducts } from '../../features/productSlice'
import Card from '../card/Card'

export default function Products() {

  const products=useSelector(state=>state.products)
  console.log(products);
  
  const dispatch=useDispatch();
  useEffect(()=>
   { dispatch(fetchProducts())
   },[])
  return (
    <div>
      {products.products.length ? (
       <Card product={products.products}/>
      ) : null}
    </div>
  )
}
