import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState, AppThunk } from '../../app/store';
import { ToastContainer, toast } from 'react-toast'

import { useNavigate } from 'react-router-dom';

export interface UserState {
    username:string;
    email:string;
    isFetching: boolean,
    isSuccess: boolean,
    isError: boolean,
    errorMessage:string, 
 }
  
  const initialState: UserState = {
    username: "",
    email: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "", 
 };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer comes here
  },
  extraReducers: (builder) => {
    builder    // Extra reducer comes here

    .addCase(signupUser.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.email = payload.email;
        state.username = payload.name;
      
        
       

      })
     .addCase (signupUser.pending, (state) => {
        state.isFetching = true;
       
      })
      .addCase(signupUser.rejected, (state, { payload }:any) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload
      
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.email = payload.email;
        state.username = payload.name;
        state.isFetching = false;
        state.isSuccess = true;
              


        return state;
      })
      .addCase( loginUser.rejected ,(state, { payload }:any) => {
        console.log('payload', payload);
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload
      })
      .addCase( loginUser.pending, (state) => {
        state.isFetching = true;
      },)
  },
})

///////
export const signupUser = createAsyncThunk(
    'users/signupUser',
    async ({ name, email, password }:any , thunkAPI) => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/users",
          {
            method: "POST",

            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          }
        )
        let data = await response.json()
        console.log("data", data)
        if (response.status === 200) {
          localStorage.setItem("token", data.token)
          return { ...data, username: name, email: email }
        } else {
          return thunkAPI.rejectWithValue(data)
        }
      } catch (e:any) {
        console.log("Error", e.response.data)
        return thunkAPI.rejectWithValue(e.response.data)
      }
    }
  )
//// end sign up

///// start log in 
export const loginUser = createAsyncThunk(
  "users/login",
  async ({ username, password }:any, thunkAPI) => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/auth/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      )
      let data = await response.json()
  
      
      console.log("response", data)
      if (response.status === 200) {
        console.log("login")
        localStorage.setItem("token", data.token)
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (e:any) {
      console.log("Error", e.response.data)
      thunkAPI.rejectWithValue(e.response.data)
    }
  }
)
//end log in
export default userSlice.reducer;

export const userSelector = (state: RootState) => state.user;
export const isFetching = (state: RootState) => state.user.isFetching;
export const isSuccess = (state: RootState) => state.user.isSuccess;
export const isError = (state: RootState) => state.user.isError;
export const  errorMessage = (state: RootState) => state.user.errorMessage;




