import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: null,
  hasScrolled: false,
  isActive: false,
};

export const iconSlice = createSlice({
  name: "iconState",
  initialState,
  reducers: {
    setHasScrolled: (state, action) => {
      state.hasScrolled = action.payload;
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { setHasScrolled, setIsActive } = iconSlice.actions;

export default iconSlice.reducer;
