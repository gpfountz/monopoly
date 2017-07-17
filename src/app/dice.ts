export interface Dice {
    /** rolls dice and return the value of both die added together */
    roll(): number;

    /** returns try of the last roll resulted in both die's having the same value */
    isDouble(): boolean;
}
