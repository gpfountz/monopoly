import { Board } from './board';
import { Player } from "app/player";
import { RealDice } from "app/real-dice";
import { Dice } from "app/dice";
import { PlayerToken } from "app/player-tokens.enum";

export class Game {
    public static PLAYER_MIN_MAX_ERROR: string = 'must have 2 to 8 players to play Monopoly';

    private board: Board;
    private dice: Dice;

    constructor(playerTokens: PlayerToken[]) {
        if (playerTokens.length < 2 || playerTokens.length > 8) {
            throw new Error(Game.PLAYER_MIN_MAX_ERROR);
        }
        this.dice = new RealDice();
        let players = new Array();
        for (let playerToken of playerTokens) {
            players.push(new Player(playerToken));
        }
        this.shuffle(players);
        this.board = new Board(players);
    }

    /** get this number of players in the game */
    public getNumberPlayers(): number {
        return this.board.getPlayers().length;
    }

    /** play a number of rounds.  each player moves once per round. */
    public playRounds(count: number) {
        for (let index = 0; index < count; index++) {
            this.playRound();
        }
    }

    /** play 1 round.  each player moves once. */
    public playRound() {
        for(let player of this.board.getPlayers()) {
            player.move(this.board, this.dice);
        }
    }

    /** The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle */
    private shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

}
