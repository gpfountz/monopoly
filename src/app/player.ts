import { BoardPosition } from "app/board-positions.enum";
import { PlayerToken } from "app/player-tokens.enum";

export class Player {
    private token: PlayerToken;
    private position: BoardPosition;
    private moveCount: number;

    constructor(token: PlayerToken) {
        this.token = token;
        this.reset();
    }

    move(count) {
        this.moveCount++;
        return (this.position + count) % 40;    
    }

    getMoveCount() {
        return this.moveCount;
    }

    getPosition() {
        return this.position;
    }

    getToken() {
        return this.token;
    }

    setPosition(position: BoardPosition) {
        this.position = position;
    }

    rollDice() {
        let min :Number = 1;
        let max :Number = 6;
        return this.getRandomInt(min, max) + this.getRandomInt(min, max);
    }

    reset() {
        this.position = BoardPosition.Go;
        this.moveCount = 0;
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
