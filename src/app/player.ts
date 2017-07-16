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
    private diceValue: number;

    constructor(token: PlayerToken) {
        this.token = token;
        this.reset();
    }

    public decreaseBalance(amount: number) {
        this.balance -= amount;
    }

    public move(board: Board, dice: Dice): BoardPosition {
        this.moveCount++;
        this.diceValue = dice.roll();
        let previousPosition = this.position;
        this.position = (this.position + this.diceValue) % 40;
        for (let i = 1; i < this.diceValue; i++) {
            board.passOver(this, (previousPosition + i) % 40);
        }
        //console.log("player's balance prior to landOn" + this.balance);
        board.landOn(this, this.position);
        //console.log("player's balance after to landOn" + this.balance);
        return this.position;
    }

    public getBalance(): number {
        return this.balance;
    }

    public getDiceValue(): number {
        return this.diceValue
    }

    public getMoveCount() {
        return this.moveCount;
    }

    public getPosition() {
        return this.position;
    }

    public getToken() {
        return this.token;
    }

    public increaseBalance(amount: number) {
        this.balance += amount;
    }

    public isInJail(): boolean {
        return this.inJail;
    }

    public setBalance(value: number) {
        this.balance = value;
    }

    public setInJail(value: boolean) {
        this.inJail = value;
    }

    public setPosition(position: BoardPosition) {
        this.position = position;
    }

    /*
    * resets position, moveCount, and balance
    */
    public reset() {
        this.position = BoardPosition.Go;
        this.moveCount = 0;
        this.balance = 2000;
        this.inJail = false;
    }

}
