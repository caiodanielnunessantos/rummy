import { Socket, Server } from 'socket.io';
import { ClientToServerEvents, ServerToClientEvents, Player } from 'base';

export interface InterSocketEvents { }

export const server = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterSocketEvents,
  Player<MySocket>
  >({ cors: { methods: ['GET', 'POST'], origin: 'http://localhost:3000' } });

export type MyServer = typeof server;
export type MySocket = Socket<
  ClientToServerEvents,
  ServerToClientEvents,
  InterSocketEvents,
  Player<MySocket>
>;

server.on('connection', (socket) => {
  socket.emit('op_ok', 'global_info');
});

server.listen(4000);
