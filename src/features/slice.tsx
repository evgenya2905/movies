import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'slicer',
  initialState: { value: 0 },
  reducers: {
    changeValue: (state) => {
      state.value += 1;
    },
  },
});

export const { changeValue } = counterSlice.actions;

export default counterSlice.reducer;
