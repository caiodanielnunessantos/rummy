export interface Card {
  rank: string, suit: string,
}

export interface GameConfig {
  ranks: string[], suits: string[], min_seq: number, min_set: number,
}

export const default_game_config: GameConfig= {
  ranks: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  suits: ['RED', 'YELLOW', 'GREEN', 'BLUE'],
  min_seq: 3, min_set: 3,
};

function is_sequence(cards: Card[], config: GameConfig) {
  return cards.length >= config.min_seq
    && cards.every((card) => card.suit === cards[0].suit)
    && cards.map((card) => config.ranks.findIndex((rk) => rk === card.rank))
      .sort((a, b) => a - b)
      .every((value, index, arr) => (
        !index || arr[index - 1] + 1 === value
      ));
}

function is_set(cards: Card[], config: GameConfig) {
  return cards.length >= config.min_set
    && new Set(cards.map((card) => card.suit)).size === cards.length
    && cards.every((card) => card.rank === cards[0].rank);
}

export function is_meld(cards: Card[], config: GameConfig) {
  return is_sequence(cards, config) || is_set(cards, config);
}

export interface SingleMove {
  from?: string,
  to: string,
  card: Card,
}

export interface Moves {
  moves: SingleMove[] | 'take from pile',
  who: string,
}

export type Play = Moves | string;

export interface PartialGameState {
  state: 'partial'
  rules: GameConfig,
  other_players: string[],
  me: string,
  how_many_cards: Record<string, number>,
  pile_size: number,
  table: Record<string, Card[]>,
  my_hand: Card[],
  playing_order: string[],
  who_is_playing: string,
}

export interface CompleteGameState {
  state: 'complete',
  rules: GameConfig,
  players: string[],
  hands: Record<string, Card[]>,
  pile: Card[],
  table: Record<string, Card[]>,
  playing_order: string[],
  who_is_playing: string,
}

export function filter_game_state(complete: CompleteGameState, player: string): PartialGameState | null {
  if (complete.players.includes(player)) {
    return ({
      rules: complete.rules,
      playing_order: complete.playing_order,
      who_is_playing: complete.who_is_playing,
      me: player,
      other_players: complete.players.filter((p) => p !== player),
      table: complete.table,
      how_many_cards: Object.fromEntries(Object.entries(complete.hands).map(([k, v]) => [k, v.length])),
      pile_size: complete.pile.length,
      my_hand: complete.hands[player],
      state: 'partial',
    });
  }
  return null;
}

export function validate_table(table: Record<string, Card[]>, config: GameConfig) {
  return Object.entries(table).every(([_, cards]) => is_meld(cards, config));
}

function validate_partial_game_state(state: PartialGameState) {
  return validate_table(state.table, state.rules);
}

function validate_complete_game_state(state: CompleteGameState) {
  return validate_table(state.table, state.rules);
}

export function validate_game_state(state: PartialGameState | CompleteGameState) {
  if (state.state === 'complete')
    return validate_complete_game_state(state);
  if (state.state === 'partial')
    return validate_partial_game_state(state);
}

//TODO
export function update_partial_game_state(state: PartialGameState, moves: Moves, who: string, config: GameConfig): PartialGameState | null {
  const new_state = { ...state };
  return null;
}

//TODO
export function update_complete_game_state(state: CompleteGameState, moves: Moves, who: string, config: GameConfig): CompleteGameState | null {
  return null;
}
