import { is_meld, default_game_config } from '../src/index';

const _ = (suit: string, rank: string) => ({ suit, rank });

describe('The function "is_meld"', () => {
  it('recognizes valid sequences', () => {
    expect(
      is_meld(
        [_('BLUE', '2'), _('BLUE', '4'), _('BLUE', '3')],
        default_game_config
      )
    ).toBeTruthy();
  });
  it('recognizes valid sets', () => {
    expect(
      is_meld(
        [_('BLUE', '2'), _('GREEN', '2'), _('RED', '2')],
        default_game_config
      )
    ).toBeTruthy();
  });
  it('recognizes that extra elements make them not being a sequence', () => {
    expect(
      is_meld(
        [_('BLUE', '2'), _('BLUE', '4'), _('BLUE', '3'), _('BLUE', '6')],
        default_game_config
      )
    ).toBeFalsy();
  });
  it('recognizes that sets does not contain duplicated suits', () => {
    expect(
      is_meld(
        [_('BLUE', '2'), _('GREEN', '2'), _('RED', '2'), _('RED', '2')],
        default_game_config
      )
    ).toBeFalsy();
  });
});
