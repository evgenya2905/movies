import { RootState } from './store';

export const selectCategory = (state: RootState): string => state.switch.value;
console.log(selectCategory);
