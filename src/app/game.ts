import { Board } from './board';
import { Player } from "app/player";
import { RealDice } from "app/real-dice";
import { Dice } from "app/dice";
import { PlayerToken } from "app/player-tokens.enum";

export class Game {
    public static PLAYER_MIN_MAX_ERROR: string = 'must have 2 to 8 players to play Monopoly';

    private board: Board;
    private players: Player[];
    private dice: Dice;

    constructor(playerTokens: PlayerToken[]) {
        if (playerTokens.length < 2 || playerTokens.length > 8) {
            throw new Error(Game.PLAYER_MIN_MAX_ERROR);
        }
        this.board = new Board();
        this.dice = new RealDice();
        this.players = new Array();
        for (let playerToken of playerTokens) {
            this.players.push(new Player(playerToken));
        }
        this.shuffle(this.players);
    }

    public getNumberPlayers(): number {
        return this.players.length;
    }

    public getPlayer(playerToken: PlayerToken) {
        for (let player of this.players) {
            if (player.getToken() === playerToken) {
                return player;
            }
        }
        return undefined;
    }

    // player's order of play, first player is 0
    public getPlayerOrder(playerToken: PlayerToken): number {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].getToken() === playerToken) {
                return i;
            }
        }
        return -1;
    }

    public playRounds(count: number) {
        for (let index = 0; index < count; index++) {
            this.playRound();
        }
    }

    public playRound() {
        for(let player of this.players) {
            player.move(this.board, this.dice);
        }
    }

    /*
    * The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle
    */
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
