import { BoardPosition } from "app/board-positions.enum";
import { Player } from "app/player";
import { PlayerToken } from "app/player-tokens.enum";

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
        expect(player.move(7)).toEqual(BoardPosition.Chance1);
    });

    it('Player on location numbered 39, rolls 6, ends up on location 5', () => {
        player.move(39);
        expect(player.move(6)).toEqual(BoardPosition.OrientalAve);
    });

    it('roll dice', () => {
        for (let i = 0; i < 100; i++) {
            expect(player.rollDice()).toBeGreaterThanOrEqual(2);
            expect(player.rollDice()).toBeLessThanOrEqual(12);
        }
    });

})