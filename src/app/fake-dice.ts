import { Dice } from "app/dice";

export class FakeDice implements Dice {
    private dieValue1: number;
    private dieValue2: number;

    constructor(dieValue1: number, dieValue2: number) {
        this.dieValue1 = Math.min(6, Math.max(1, dieValue1));
        this.dieValue2 = Math.min(6, Math.max(1, dieValue2));
    }

    roll(): number {
        return this.dieValue1 + this.dieValue2;
    }
}
