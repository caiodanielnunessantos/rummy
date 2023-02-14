import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AuthenticationState {
  is_authenticated: boolean
}

const initial_state: AuthenticationState = {
  is_authenticated: false,
};

export const authorization_slice = createSlice({
  name: 'authorization_state',
  initialState: initial_state,
  reducers: {
    set_authorized: (state) => {
      state.is_authenticated = true;
    },
    set_disauthorized: (state) => {
      state.is_authenticated = false;
    }
  },
});

export const { set_authorized, set_disauthorized } = authorization_slice.actions;
export const select_info = (state: RootState) => state.connection_state;
export default authorization_slice.reducer;
