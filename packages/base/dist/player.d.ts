import { CompleteGameState, GameConfig } from './game';
export interface Player<SocketType> {
    name?: string;
    socket: SocketType;
    is_hosting?: Room<SocketType>;
    is_guest?: Room<SocketType>;
}
export interface Room<SocketType> {
    config: GameConfig;
    host: Player<SocketType>;
    guests: Player<SocketType>[];
    game?: CompleteGameState;
}
