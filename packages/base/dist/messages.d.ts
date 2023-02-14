import { GameConfig, Moves, PartialGameState } from './game';
export interface RoomInfo {
    host: string;
    rules: GameConfig;
    guests: string[];
    started: boolean;
}
export interface GlobalInfo {
    named_players: string[];
    unnamed_players: string[];
    hosting_waiting: Record<string, RoomInfo>;
}
export interface ClientToServerEvents {
    set_name: (name: string) => void;
    host_game: (config: GameConfig) => void;
    leave_host: () => void;
    join_game: (name: string) => void;
    leave_game: () => void;
    start_game: () => void;
    move: (moves: Moves) => void;
    take_card: () => void;
    global_info: () => void;
    info_room: () => void;
    info_game: () => void;
}
export interface ServerToClientEvents {
    op_ok: (op: keyof ClientToServerEvents) => void;
    op_err: (op: keyof ClientToServerEvents) => void;
    info_global: (info: GlobalInfo) => void;
    info_room: (info: RoomInfo[]) => void;
    info_game: (info: PartialGameState) => void;
    event: (op: keyof ClientToServerEvents | 'disconnection', name: string) => void;
}
