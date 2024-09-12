import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};

const CategoryIDSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    setID: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setID } = CategoryIDSlice.actions;
export default CategoryIDSlice.reducer;
