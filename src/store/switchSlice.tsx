import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISwitchState {
  value: string;
}

const initialState: ISwitchState = {
  value: 'movie',
};

export const switchSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    switchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { switchValue } = switchSlice.actions;
export default switchSlice.reducer;
