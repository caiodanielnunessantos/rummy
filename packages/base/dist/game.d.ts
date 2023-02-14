export interface Card {
    rank: string;
    suit: string;
}
export interface GameConfig {
    ranks: string[];
    suits: string[];
    min_seq: number;
    min_set: number;
}
export declare const default_game_config: GameConfig;
export declare function is_meld(cards: Card[], config: GameConfig): boolean;
export interface SingleMove {
    from?: string;
    to: string;
    card: Card;
}
export interface Moves {
    moves: SingleMove[] | 'take from pile';
    who: string;
}
export type Play = Moves | string;
export interface PartialGameState {
    state: 'partial';
    rules: GameConfig;
    other_players: string[];
    me: string;
    how_many_cards: Record<string, number>;
    pile_size: number;
    table: Record<string, Card[]>;
    my_hand: Card[];
    playing_order: string[];
    who_is_playing: string;
}
export interface CompleteGameState {
    state: 'complete';
    rules: GameConfig;
    players: string[];
    hands: Record<string, Card[]>;
    pile: Card[];
    table: Record<string, Card[]>;
    playing_order: string[];
    who_is_playing: string;
}
export declare function filter_game_state(complete: CompleteGameState, player: string): PartialGameState | null;
export declare function validate_table(table: Record<string, Card[]>, config: GameConfig): boolean;
export declare function validate_game_state(state: PartialGameState | CompleteGameState): boolean | undefined;
export declare function update_partial_game_state(state: PartialGameState, moves: Moves, who: string, config: GameConfig): PartialGameState | null;
export declare function update_complete_game_state(state: CompleteGameState, moves: Moves, who: string, config: GameConfig): CompleteGameState | null;
