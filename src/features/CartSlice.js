import { createSlice } from "@reduxjs/toolkit";
import { sumPrice ,sumQuantity } from "../services/helper";
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
        addItem:(state, action)=>{
            if (!action.selectedItems.find(p => p.id == action.payload.id)){
                state.selectedItems.push({
                    ...action.payload , quantity:1});

                    state.totalPrice=action.payload

            }

        }
    }
})

export default cartSlice.reducer
export const{addItem}=cartSlice.actions