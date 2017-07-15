import { Game } from "app/game";
import { PlayerToken } from "app/player-tokens.enum";
import { Player } from "app/player";

describe("game", () => {
    let playerTokens: PlayerToken[];
    
    beforeAll(() => {
        playerTokens = [PlayerToken.horse, PlayerToken.car];
    });

    beforeEach(() => {
    });

    it('Create a game with two players named Horse and Car', () => {
        expect(new Game(playerTokens).getNumberPlayers()).toEqual(playerTokens.length);
    });

    it('Try to create a game with < 2 or > 8 players. When attempting to play the game, it will fail', () => {
       // toThrow and toThrowError solution found on Google
        expect(() => { new Game([PlayerToken.battleship]) }).toThrowError(Game.PLAYER_MIN_MAX_ERROR);
        expect(() => { new Game([
                PlayerToken.battleship,
                PlayerToken.battleship,
                PlayerToken.battleship,
                PlayerToken.battleship,
                PlayerToken.battleship,
                PlayerToken.battleship,
                PlayerToken.battleship,
                PlayerToken.battleship,
                PlayerToken.battleship
            ]) }).toThrowError(Game.PLAYER_MIN_MAX_ERROR);
    });

    it('Create a game with two players named Horse and Car. Within creating 100 games, both orders [Horse, Car] and [car, horse] occur.', () => {
        let horseCar: boolean = false;
        let carHorse: boolean = false;
        for (let index = 0; index < 100; index++) {
            let game: Game = new Game(playerTokens);
            if (game.getPlayerOrder(PlayerToken.horse) === 0) {
                horseCar = true;
            } else {
                carHorse = true;
            }
        }
        expect(horseCar === true && carHorse === true).toBeTruthy();
    });

    it('Create a game and play, verify that the total rounds was 20 and that each player played 20 rounds.', () => {
        let game: Game = new Game(playerTokens);
        let roundCount: number = 20;
        game.playRounds(roundCount);
        for (let playerToken of playerTokens) {
            //console.log("player move count=" + player.getMoveCount());
            expect(game.getPlayer(playerToken).getMoveCount()).toEqual(roundCount);
        }
    });

    it('Create a game and play, verify that in every round the order of the players remained the same', () => {
        let game: Game = new Game(playerTokens);
        let roundCount: number = 20;
        // save the player order
        let playerTokenOrderArray = new Array<PlayerToken>();
        for (let playerToken of playerTokens) {
            playerTokenOrderArray.push(game.getPlayerOrder(playerToken));
        }
        // play x rounds and verify the order matches
        for (let index = 0; index < roundCount; index++) {
            game.playRound();
            for (let playerToken of playerTokens) {
                game.getPlayerOrder(playerToken)
                playerTokenOrderArray.push(game.getPlayerOrder(playerToken));
            }
            for (let i = 0; i < playerTokens.length; i++) {
                expect(game.getPlayerOrder(playerTokens[i])).toEqual(playerTokenOrderArray[i]);
            }
        }
    });
});