import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState, AppThunk } from '../../app/store';
export interface cartState {
    cartItems:any
    amount:number
    total:number
 }

 const initialState: cartState = {
    cartItems:[],
    amount:0,
    total:0
 };

 const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
     clearCart: (state) => {
       state.cartItems = [];
     },

     removeItem: (state, action) => {
       const itemId = action.payload;
       state.cartItems = state.cartItems.filter(
         (item:any, index:any) => item.id !== itemId
       );
     },
     addItem:(state,action)=>{
      const item=action.payload;
      state.cartItems.push(item);
     },
     increase: (state, action) => {
       const cartItem = state.cartItems.find(
         (item:any) => item.id === action.payload.id
       );
       cartItem.amount = cartItem.amount + 1;
     },
     decrease: (state, action) => {
       const cartItem = state.cartItems.find(
         (item:any) => item.id === action.payload.id
       );
       cartItem.amount = cartItem.amount - 1;
     },
     calculateTotals: (state) => {
       let amount = 0;
       let total = 0;
       state?.cartItems?.forEach((item:any) => {
         amount += item.amount;
         total += item.amount * item.price;
       });
       state.amount = amount;
       state.total = total;
     },
   },
   extraReducers: {
   
   },
 });

 export const { clearCart, removeItem, increase, decrease, calculateTotals ,addItem} =
  cartSlice.actions;
  export const  cartItems = (state: RootState) => state.cart.cartItems;


export default cartSlice.reducer;