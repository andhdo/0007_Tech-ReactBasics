import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;

// ts adds
export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
