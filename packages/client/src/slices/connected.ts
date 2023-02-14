import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface ConnectionState {
  is_connected: boolean
}

const initial_state: ConnectionState = {
  is_connected: false,
};

export const connection_state_slice = createSlice({
  name: 'connection_state',
  initialState: initial_state,
  reducers: {
    connected: (state) => {
      state.is_connected = true;
    },
    disconnected: (state) => {
      state.is_connected = false;
    }
  },
});

export const { connected, disconnected } = connection_state_slice.actions;
export const select_info = (state: RootState) => state.connection_state;
export default connection_state_slice.reducer;
