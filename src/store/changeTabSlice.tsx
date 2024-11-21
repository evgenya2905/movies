import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setTabName, getTabName } from '../shared/utils';
import { TabNameType } from '../types/types';

export interface ITabState {
  value: TabNameType;
}

const initialState: ITabState = {
  value: getTabName() || 'Top',
};

export const changeTabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    changeTab: (state, action: PayloadAction<TabNameType>) => {
      state.value = action.payload;
      setTabName(action.payload);
    },
  },
});

export const { changeTab } = changeTabSlice.actions;
export default changeTabSlice.reducer;
