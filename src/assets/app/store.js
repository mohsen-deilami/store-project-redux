import productReducer from "../../features/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './../../features/CartSlice'
import logger from 'redux-logger';
const store =configureStore({
    reducer:{product : productReducer ,
        cart : cartReducer
    },
    /* middleware:(getdefaultMiddleware=>getdefaultMiddleware().concat(logger)) */
    
})
export default store