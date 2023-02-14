import { ServerToClientEvents, ClientToServerEvents } from 'base';
import { io, Socket } from 'socket.io-client';
import { connected, disconnected } from '../slices/connected';
import { set_authorized, set_disauthorized } from '../slices/authenticated';
import { store } from '../store';

export type MySocket = Socket<ServerToClientEvents, ClientToServerEvents>

export const socket: MySocket = io('localhost:4000');
socket.on('connect', () => {
  store.dispatch(connected())
});
socket.on('disconnect', () => {
  store.dispatch(disconnected());
});
socket.on('op_ok', (op) => {
  if (op === 'set_name') {
    store.dispatch(set_authorized());
  }
});
