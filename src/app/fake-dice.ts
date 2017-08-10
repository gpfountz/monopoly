import { Dice } from "app/dice";

export class FakeDice implements Dice {
    private dieValue1: number;
    private dieValue2: number;
    private dieValue3: number = undefined;
    private dieValue4: number = undefined;
    private dieValue5: number = undefined;
    private dieValue6: number = undefined;

    constructor(dieValue1: number, dieValue2: number,
        dieValue3?: number, dieValue4?: number,
        dieValue5?: number, dieValue6?: number) {
        this.dieValue1 = Math.min(6, Math.max(1, dieValue1));
        this.dieValue2 = Math.min(6, Math.max(1, dieValue2));
        if (dieValue3 !== undefined && dieValue4 != undefined) {
            this.dieValue3 = Math.min(6, Math.max(1, dieValue3));
            this.dieValue4 = Math.min(6, Math.max(1, dieValue4));
        }
        if (dieValue5 !== undefined && dieValue6 !== undefined) {
            this.dieValue5 = Math.min(6, Math.max(1, dieValue5));
            this.dieValue6 = Math.min(6, Math.max(1, dieValue6));
        }
    }

    /** returns try of the last roll resulted in both die's having the same value */
    public isDouble(): boolean {
        return this.dieValue1 !== undefined 
            && this.dieValue2 !== undefined 
            && this.dieValue1 === this.dieValue2;
    }

    /** 
     * rolls dice and return the value of both die added together 
     * if die 3 and 4 exist, copy to 1 and 2 so next roll will be those dice
     * if die 5 and 6 exist, copy to 3 and 4 so following roll be those dice
     * */
    public roll(): number {
        try {
            return this.dieValue1 + this.dieValue2;
        } finally {
            if (this.dieValue3 !== undefined && this.dieValue4 !== undefined) {
                this.dieValue1 = this.dieValue3;
                this.dieValue2 = this.dieValue4;
                this.dieValue3 = undefined;
                this.dieValue4 = undefined;
                if (this.dieValue5 !== undefined && this.dieValue6 !== undefined) {
                    this.dieValue3 = this.dieValue5;
                    this.dieValue4 = this.dieValue6;
                    this.dieValue5 = undefined;
                    this.dieValue6 = undefined;
                }
            }
        }
    }

}
