import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/users/userSlice';
import productReducer from '../features/products/productSlice'
import cartReducer  from '../features/Cart/CartSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user:userReducer,
    product:productReducer,
    cart:cartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
