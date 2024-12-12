// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer, // Add the baseApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware), // Add the baseApi middleware
});

export default store;
