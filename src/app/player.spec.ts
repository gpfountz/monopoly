import { BoardPosition } from "app/board-positions.enum";
import { Player } from "app/player";
import { PlayerToken } from "app/player-tokens.enum";
import { FakeDice } from "app/fake-dice";

describe('Player Movements', () => {
    let player :Player;

    beforeAll(() => {
        player = new Player(PlayerToken.topHat);
    });

    beforeEach(() => {
        player.setPosition(BoardPosition.Go)
    });

    it('get initial position', () => {
        expect(player.getPosition()).toEqual(BoardPosition.Go);
    });

    it('Player on beginning location (numbered 0), rolls 7, ends up on location 7', () => {
        expect(player.move(new FakeDice(3,4))).toEqual(BoardPosition.Chance1);
    });

    it('Player on location numbered 39, rolls 6, ends up on location 5', () => {
        player.setPosition(BoardPosition.Boardwalk);
        expect(new FakeDice(3,3).roll()).toEqual(6);
        expect(player.move(new FakeDice(3,3))).toEqual(BoardPosition.ReadingRailroad);
    });

})