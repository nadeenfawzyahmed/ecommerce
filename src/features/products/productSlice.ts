import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { stat } from "fs";
import { RootState, AppThunk } from '../../app/store';

export interface ProductState {
    products: any
    product:any
  }
const initialState: ProductState = {
    products:[],
    product:{}
  };

 export const productSlice=createSlice(
    {
        name:'product',
        initialState,
        reducers:{

        },
        extraReducers: (builder) => {
            builder
            .addCase(fetchProducts.fulfilled, (state, { payload }:any) => {
                console.log("payload",payload)
                state.products=payload.data
                console.log("state",state.products)
            })
            .addCase(fetchById.fulfilled,(state,{payload}:any)=>{
                console.log("payload by id ",payload)
                state.product=payload.data
                

            })
    }}
 )
 /////////
 export const fetchProducts = createAsyncThunk(
    'products/fetchproducts',
    async (  thunkAPI) => {
        const response = await fetch(
          "https://fakestoreapi.com/products",
          
        )
        let data = await response.json()
        console.log("data", data)
        if (response.status === 200) {
          return { data}
        } 
      } 
    
  )
///// fetch by id
export const fetchById=createAsyncThunk(
    'products/fetchById',
    async (productId:number,thunkAPI)=>{
        const response=await fetch (
            "https://fakestoreapi.com/products/"+productId,

        )
        let data=await response.json()
        console.log("data by id", data)
        if (response.status===200){
            return {data}
        }

        
    }

)

  export default productSlice.reducer;
  export const products = (state: RootState) => state.product.products;
  export const product = (state: RootState) => state.product.product;



