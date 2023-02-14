"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update_complete_game_state = exports.update_partial_game_state = exports.validate_game_state = exports.validate_table = exports.filter_game_state = exports.is_meld = exports.default_game_config = void 0;
exports.default_game_config = {
    ranks: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    suits: ['RED', 'YELLOW', 'GREEN', 'BLUE'],
    min_seq: 3, min_set: 3,
};
function is_sequence(cards, config) {
    return cards.length >= config.min_seq
        && cards.every((card) => card.suit === cards[0].suit)
        && cards.map((card) => config.ranks.findIndex((rk) => rk === card.rank))
            .sort((a, b) => a - b)
            .every((value, index, arr) => (!index || arr[index - 1] + 1 === value));
}
function is_set(cards, config) {
    return cards.length >= config.min_set
        && new Set(cards.map((card) => card.suit)).size === cards.length
        && cards.every((card) => card.rank === cards[0].rank);
}
function is_meld(cards, config) {
    return is_sequence(cards, config) || is_set(cards, config);
}
exports.is_meld = is_meld;
function filter_game_state(complete, player) {
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
exports.filter_game_state = filter_game_state;
function validate_table(table, config) {
    return Object.entries(table).every(([_, cards]) => is_meld(cards, config));
}
exports.validate_table = validate_table;
function validate_partial_game_state(state) {
    return validate_table(state.table, state.rules);
}
function validate_complete_game_state(state) {
    return validate_table(state.table, state.rules);
}
function validate_game_state(state) {
    if (state.state === 'complete')
        return validate_complete_game_state(state);
    if (state.state === 'partial')
        return validate_partial_game_state(state);
}
exports.validate_game_state = validate_game_state;
//TODO
function update_partial_game_state(state, moves, who, config) {
    const new_state = Object.assign({}, state);
    return null;
}
exports.update_partial_game_state = update_partial_game_state;
//TODO
function update_complete_game_state(state, moves, who, config) {
    return null;
}
exports.update_complete_game_state = update_complete_game_state;
