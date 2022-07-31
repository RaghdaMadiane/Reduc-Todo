import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './taskSlice'
import authReducer from "./authSlice";
export const store = configureStore({
  reducer: {
   todo:taskReducer,
   auth: authReducer,
  
  },
})