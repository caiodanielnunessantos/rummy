import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { GlobalInfo, RoomInfo  } from 'base';

interface Info {
  global_info: GlobalInfo,
  room_info?: RoomInfo,
}

const initial_state: Info = {
  global_info: {
    hosting_waiting: {},
    named_players: [],
    unnamed_players: [],
  },
  room_info: undefined,
};

export const info_slice = createSlice({
  name: 'info',
  initialState: initial_state,
  reducers: {
    get_global_info: (state, action: PayloadAction<GlobalInfo>) => {
      state.global_info = action.payload;
    },
    get_room_info: (state, action: PayloadAction<RoomInfo>) => {
      state.room_info = action.payload;
    },
  },
});

export const { } = info_slice.actions;
export const select_info = (state: RootState) => state.info;
export default info_slice.reducer;
