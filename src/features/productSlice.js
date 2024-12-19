import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import api from "../services/services";

const initialState={
    loading :false ,
    products :[] , 
    error:""
}
const fetchProducts=createAsyncThunk('products/fetchProduts',()=>  api.get("/products"))
const productSlice=createSlice({
    name:'products',
    initialState,
    extraReducers : (builder) =>{
        builder.addCase(fetchProducts.pending , state =>{
           state.loading =true;
        });
        builder.addCase(fetchProducts.fulfilled , (state , action)=>{
           state.loading=false ;
           state.products =action.payload.data ;
           state.error = "";
                 });
        builder.addCase(fetchProducts.rejected , (state , action)=>{
           state.loading =false ;
           state.products = [] ;
           state.error =action.error.message;
   
        })
       },
})


export default productSlice.reducer
export {fetchProducts}