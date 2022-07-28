import {createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

export const registeration = createAsyncThunk(
  "user/register",
  async ({ username, email, password  }, thunkAPI) => {
    try {
      const response = await AuthService.register(username, email, password);
      
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        
      return thunkAPI.rejectWithValue();
    }
  }
);
export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(email, password);
      
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
     
      return thunkAPI.rejectWithValue();
    }
  }
);
export const logout = createAsyncThunk("user/logout", async () => {
  await AuthService.logout();
});
