import { Game } from "app/game";
import { PlayerToken } from "app/player-tokens.enum";
import { Player } from "app/player";

describe("game", () => {
    let game: Game;
    let players: Player[];
    
    beforeAll(() => {
        players = [new Player(PlayerToken.horse), new Player(PlayerToken.car)];
    });

    beforeEach(() => {
        for (let player of players) {
            player.reset();
        }
    });

    it('Create a game with two players named Horse and Car', () => {
        expect(new Game(players).getPlayers().length).toEqual(players.length);
    });

    it('Try to create a game with < 2 or > 8 players. When attempting to play the game, it will fail', () => {
       // toThrow and toThrowError solution found on Google
        expect(() => { new Game([new Player(PlayerToken.battleship)]) }).toThrowError(Game.PLAYER_MIN_MAX_ERROR);
        expect(() => { new Game([
                new Player(PlayerToken.battleship),
                new Player(PlayerToken.battleship),
                new Player(PlayerToken.battleship),
                new Player(PlayerToken.battleship),
                new Player(PlayerToken.battleship),
                new Player(PlayerToken.battleship),
                new Player(PlayerToken.battleship),
                new Player(PlayerToken.battleship),
                new Player(PlayerToken.battleship)
            ]) }).toThrowError(Game.PLAYER_MIN_MAX_ERROR);
    });

    it('Create a game with two players named Horse and Car. Within creating 100 games, both orders [Horse, Car] and [car, horse] occur.', () => {
        let horseCar: boolean = false;
        let carHorse: boolean = false;
        for (let index = 0; index < 100; index++) {
            game = new Game(players);
            if (game.getPlayers()[0].getToken() === PlayerToken.horse) {
                horseCar = true;
            } else {
                carHorse = true;
            }
        }
        expect(horseCar === true && carHorse === true).toBeTruthy();
    });

    it('Create a game and play, verify that the total rounds was 20 and that each player played 20 rounds.', () => {
        game = new Game(players);
        let roundCount: number = 20;
        game.playRounds(roundCount);
        for (let player of game.getPlayers()) {
            //console.log("player move count=" + player.getMoveCount());
            expect(player.getMoveCount()).toEqual(roundCount);
        }
    });

    it('Create a game and play, verify that in every round the order of the players remained the same', () => {
        game = new Game(players);
        let roundCount: number = 20;
        // save the player order
        let playerTokenOrderArray = [];
        for (let player of game.getPlayers()) {
            playerTokenOrderArray.push(player.getToken());
        }
        // play x rounds and verify the order matches
        for (let index = 0; index < roundCount; index++) {
            game.playRounds(1);
            for (let playerIndex = 0; playerIndex < game.getPlayers().length; playerIndex++) {
                expect(game.getPlayers()[playerIndex].getToken()).toEqual(playerTokenOrderArray[playerIndex]);
            }
        }
        for (let player of game.getPlayers()) {
            expect(player.getMoveCount()).toEqual(roundCount);
       }
    });
});