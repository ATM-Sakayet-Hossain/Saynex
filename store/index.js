// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./slices/authSlice";

// export default configureStore({
//   reducer: {
//     userData: authSlice,
//   },
// });


import { configureStore } from '@reduxjs/toolkit'
import authSlice  from './authSlice'

export default configureStore({
  reducer: {
    userData: authSlice
  },
})