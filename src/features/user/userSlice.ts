import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState, AppThunk } from '../../app/store';

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
        state.email = payload.user.email;
        state.username = payload.user.name;
      })
     .addCase (signupUser.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(signupUser.rejected, (state, { payload }:any) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.user.errorMessage
      })
  },
})

///////
export const signupUser = createAsyncThunk(
    'users/signupUser',
    async ({ name, email, password }:any , thunkAPI) => {
      try {
        const response = await fetch(
          "https://mock-user-auth-server.herokuapp.com/api/v1/users",
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
////
export default userSlice.reducer;

export const userSelector = (state: RootState) => state.user;
export const isFetching = (state: RootState) => state.user.isFetching;
export const isSuccess = (state: RootState) => state.user.isSuccess;
export const isError = (state: RootState) => state.user.isError;
export const  errorMessage = (state: RootState) => state.user.errorMessage;




