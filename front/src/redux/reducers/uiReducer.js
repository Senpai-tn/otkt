import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading } = uiSlice.actions;

export default uiSlice.reducer;
