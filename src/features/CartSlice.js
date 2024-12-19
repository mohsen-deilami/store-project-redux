import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: false,
      };
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        
    }
})