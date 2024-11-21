import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from './movieApi';
import switchReducer from './switchSlice';
import changeTabReducer from './changeTabSlice';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    switch: switchReducer,
    tab: changeTabReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
