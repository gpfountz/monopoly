import { Board } from './board';
import { Player } from "app/player";
import { RealDice } from "app/real-dice";
import { Dice } from "app/dice";

export class Game {
    private board: Board;
    private players: Player[];
    public static PLAYER_MIN_MAX_ERROR: string = 'must have 2 to 8 players to play Monopoly';
    private dice: Dice = new RealDice();

    constructor(players: Player[]) {
        this.board = new Board();
        if (players.length < 2 || players.length > 8) {
            throw new Error(Game.PLAYER_MIN_MAX_ERROR);
        }
        this.players = players;
        this.shuffle(this.players);
    }

    getPlayers() {
        return this.players;
    }

    playRounds(count: number) {
        for (let index = 0; index < count; index++) {
            for(let player of this.players) {
                player.move(this.dice);
            }
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
