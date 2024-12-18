import React, { useEffect } from 'react'
import style from './products.module.css'
import { useDispatch , useSelector } from 'react-redux'
import { fetchProducts } from '../../features/productSlice'

export default function Products() {

  const products=useSelector(state=>state.products)
  console.log(products);
  
  const dispatch=useDispatch();
  useEffect(()=>
   { dispatch(fetchProducts())
   },[])
  return (
    <div>
      
    </div>
  )
}
