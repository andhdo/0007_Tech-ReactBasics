import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// thunks
// it requires redux-thunk middleware to be added => py default included in RTK

// creat4eAsyncThunk <-- utility

// can be called directly, but betternot to do it for consistency
//
// export const incrementAsync = (amount) => (dispatch) => {
//  setTimeout(() => {
//    dispatch(incrementByAmount);
//  }, 2000);
// };
//
// better to use createAsyncThink that handles all this stuff and build the action creators
// and intermedia processing phases

export const incrementBatch = (amount) =>
  createAsyncThunk("counter/incrementBatch", async (delay: number = 3000) => {
    await new Promise((resolve) => setTimeout(resolve, delay));
  });

// slice

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // uses immer to wrap mutable logic
      // instead of
      // return { ...state, value + 1 }
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    //  [incrementBatch.pending] = (state) => {
    //    state.status = 'pending';
    //  },
    //  [incrementBatch.fulfilled] = (state) => {
    //    state.status = 'fulfilled';
    //    state.data = action.payload;
    //  },
    //  [incrementBatch.rejected] = (state) => {
    //    state.status = 'rejected';
    //  },
  },
});

// action creators to generate
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

/*
export const fetchUserById = (userId) => {
  // ................................................... thunk creation
  return async (dispatch, getState) => {
    try {
      const user = await theApi.fetchById(userId); // .. async api call
      dispatch(userLoaded(user)); // ................... dispatch on response
    } catch (err) {}
  };
};
*/
