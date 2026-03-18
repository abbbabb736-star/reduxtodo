import { configureStore, createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [], 
  reducers: {
    addItem: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = itemsSlice.actions;

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});