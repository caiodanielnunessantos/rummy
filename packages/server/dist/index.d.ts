import { Socket, Server } from 'socket.io';
import { ClientToServerEvents, ServerToClientEvents, Player } from 'base';
export interface InterSocketEvents {
}
export declare const server: Server<ClientToServerEvents, ServerToClientEvents, InterSocketEvents, Player<MySocket>>;
export type MyServer = typeof server;
export type MySocket = Socket<ClientToServerEvents, ServerToClientEvents, InterSocketEvents, Player<MySocket>>;
