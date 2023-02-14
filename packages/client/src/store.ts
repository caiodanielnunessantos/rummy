import { configureStore } from '@reduxjs/toolkit';
import info from './slices/info';
import connection_state from './slices/connected';
import authenticated from './slices/authenticated';

export const store = configureStore({
  reducer: {
    info,
    connection_state,
    authenticated,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
