import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setFlag, getFlag } from '../shared/utils';
import { FlagType } from '../types/types';

export interface ISwitchState {
  value: FlagType;
}

const initialState: ISwitchState = {
  value: getFlag() || 'movie',
};

export const switchSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    switchValue: (state, action: PayloadAction<FlagType>) => {
      state.value = action.payload;
      setFlag(action.payload);
    },
  },
});

export const { switchValue } = switchSlice.actions;
export default switchSlice.reducer;
