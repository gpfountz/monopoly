import { Board } from './board';
import { BoardPosition } from "app/board-positions.enum";
import { PlayerToken } from "app/player-tokens.enum";
import { Dice } from "app/dice";

export class Player {
    private token: PlayerToken;
    private position: BoardPosition;
    private inJail: boolean = false;
    private moveCount: number;
    private balance: number;

    constructor(token: PlayerToken) {
        this.token = token;
        this.reset();
        this.balance = 2000; // todo what balance does a player start with
    }

    decreaseBalance(amount: number) {
        this.balance -= amount;
    }

    move(board: Board, dice: Dice) {
        this.moveCount++;
        let previousPosition = this.position;
        let moveCount: number = dice.roll();
        for (let i = 0; i < moveCount - 1; i++) {
            // skipOver
            board.getBoardSpace((previousPosition + i) % 40).skipOver(this);
        }
        // landOn
        this.position = (this.position + dice.roll()) % 40;
        board.getBoardSpace(this.position).landOn(this);

        return this.position;
    }

    getBalance(): number {
        return this.balance;
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

    increaseBalance(amount: number) {
        this.balance += amount;
    }

    isInJail(): boolean {
        return this.inJail;
    }

    setBalance(value: number) {
        this.balance = value;
    }

    setInJail(value: boolean) {
        this.inJail = value;
    }

    setPosition(position: BoardPosition) {
        this.position = position;
    }

    reset() {
        this.position = BoardPosition.Go;
        this.moveCount = 0;
    }

}
