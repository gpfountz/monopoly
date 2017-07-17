import { Dice } from "app/dice";

export class FakeDice implements Dice {
    private dieValue1: number;
    private dieValue2: number;

    constructor(dieValue1: number, dieValue2: number) {
        this.dieValue1 = Math.min(6, Math.max(1, dieValue1));
        this.dieValue2 = Math.min(6, Math.max(1, dieValue2));
    }

    /** returns try of the last roll resulted in both die's having the same value */
    public isDouble(): boolean {
        return this.dieValue1 === this.dieValue2;
    }

    /** rolls dice and return the value of both die added together */
    public roll(): number {
        return this.dieValue1 + this.dieValue2;
    }

}
