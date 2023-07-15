import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../Reducer/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
