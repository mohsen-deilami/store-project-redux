import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../services/helper";
const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkout: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((p) => p.id == action.payload.id)) {
        state.selectedItems.push({...action.payload, quantity: 1});
        state.checkout = false;
       state.itemsCounter= sumQuantity(state.selectedItems);
        state.totalPrice= sumPrice(state.selectedItems);
      }
    },
    removeItem: (state, action) => {
      const remainProducts = state.selectedItems.filter(
        (p) => p.id !== action.payload.id
      );
      state.selectedItems = remainProducts;

      state.itemsCounter= sumQuantity(state.selectedItems);
      state.totalPrice= sumPrice(state.selectedItems);
    },
    increase:(state,action) => {
        const index=state.selectedItems.findIndex(p=>p.id === action.payload.id);
        state.selectedItems[index].quantity ++;
        state.itemsCounter= sumQuantity(state.selectedItems);
        state.totalPrice= sumPrice(state.selectedItems);
    },
    decrease:(state, action)=>{
        const index=state.selectedItems.findIndex(p=>p.id === action.payload.id);
        state.selectedItems[index].quantity --;
        state.itemsCounter= sumQuantity(state.selectedItems);
        state.totalPrice= sumPrice(state.selectedItems);

    },
    checkout: (state)=>{
        state.selectedItems= []
       state.itemsCounter= 0
        state.totalPrice=0
        state.checkout=true
    }
  },
});

export default cartSlice.reducer;
export const { addItem , removeItem, increase,  decrease ,checkout} =cartSlice.actions
    
   
