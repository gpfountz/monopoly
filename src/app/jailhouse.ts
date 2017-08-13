import { PlayerToken } from "app/player-tokens.enum";

export class Jailhouse {
    private inmates: Map<PlayerToken, number>; // player/moveCount map

    constructor() {
        this.inmates = new Map<PlayerToken, number>();
    }

    /** 
     * is player an inmate 
     * @param player: PlayerToken
     */
    public isInJail(player: PlayerToken): boolean {
        return this.inmates.has(player);
    }

    /** 
     * add player to inmates and set move count to 0 
     * @param player: PlayerToken
     */
    public addInmate(player: PlayerToken) {
        if (!this.isInJail(player)) {
            this.inmates.set(player, 0);
        }
    }

    /**
     * returns inmates move count
     * @param player: PlayerToken
     */
    public getInmateMoveCount(player: PlayerToken): number {
        let moveCount = 0;
        if (this.isInJail(player)) {
            moveCount = this.inmates.get(player);
        }
        return moveCount;
    }

    /**
     * increments inmates move count
     * @param player: PlayerToken
     */
    public incrementInmateMoveCount(player: PlayerToken) {
        if (this.isInJail(player)) {
            this.inmates.set(player, this.getInmateMoveCount(player) + 1);
        }
    }

    /** 
     * remove player from inmates 
     * @param player: PlayerToken
     */
    public removeInmate(player: PlayerToken) {
        if (this.isInJail(player)) {
            this.inmates.delete(player);
        }
    }

}
