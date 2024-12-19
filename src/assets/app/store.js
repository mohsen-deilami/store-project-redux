import productSlice from "../../features/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
const store =configureStore({
    reducer:{products : productSlice},
    /* middleware:(getdefaultMiddleware=>getdefaultMiddleware().concat(logger)) */
})
export default store