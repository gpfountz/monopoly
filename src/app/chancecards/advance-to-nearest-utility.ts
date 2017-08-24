import { Board } from "app/board";
import { PlayerToken } from "app/player-tokens.enum";
import { Dice } from "app/dice";
import { CardBase } from "app/card-base";
import { Card } from "app/card";
import { BoardPosition } from "app/board-positions.enum";
import { UtilitySpace } from "app/boardspaces/utility-space";
import { BoardSpace } from "app/boardspaces/board-space";

export class AdvanceToNearestUtility extends CardBase implements Card {
    constructor() {
        super("Advance token to nearest Utility");
    }

    play(board: Board, playerToken: PlayerToken, dice: Dice) {
        let nearestUtility: BoardPosition = BoardPosition.WaterWorks;
        let currentPosition: BoardPosition = board.getPlayer(playerToken).getPosition();
        if (currentPosition > BoardPosition.WaterWorks
                || currentPosition < BoardPosition.ElectricCompany) {
            nearestUtility = BoardPosition.ElectricCompany;
        }
        this.advanceTo(board, playerToken, nearestUtility);

        // TODO either buy or pay rolled dice * 10
        // want to call landon, but need to always pay 10x
        
        // let boardSpace = board.getBoardSpace(nearestUtility);
        // let owner = boardSpace.getOwner();
        // let player = board.getPlayer(playerToken);
        // if (owner === undefined) {
        //     // attempt to buy the property
        //     if (player.getBalance() >= boardSpace.purchasePrice) {
        //         player.decreaseBalance(this.purchasePrice);
        //         this.owner = player;
        //     }
        // } else if (this.owner.getToken() === player.getToken()) {
        //     // landed on my own property, nothing happens
        // } else if (this.mortgaged) {
        //     // nothing happens if property is mortgaged
        // } else if (this.owner !== undefined) {
        //     // pay the property owner rent
        //     let rent = player.getDiceValue() * 4;
        //     if (this.board.getCountOwnedInGroup(this.group) == this.group.length) {
        //         rent = player.getDiceValue() * 10;
        //     }
        //     player.decreaseBalance(rent);
        //     this.owner.increaseBalance(rent);
        // }
    }
}
