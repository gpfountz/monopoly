import { LuxuryTax } from './boardspaces/luxury-tax';
import { DefaultSpace } from './boardspaces/default-space';
import { IncomeTax } from './boardspaces/income-tax';
import { Go } from './boardspaces/go';
import { BoardSpace } from './boardspaces/board-space';
import { BoardPosition } from 'app/board-positions.enum';
import { Player } from "app/player";
import { PlayerToken } from "app/player-tokens.enum";
import { GoToJail } from "app/boardspaces/go-to-jail";
import { RailRoadSpace } from "app/boardspaces/rail-road-space";
import { PropertySpace } from "app/boardspaces/property-space";
import { UtilitySpace } from "app/boardspaces/utility-space";

export class Board {
    private boardSpaceMap: Map<BoardPosition, BoardSpace> = new Map<BoardPosition, BoardSpace>();

    constructor() {
        this.boardSpaceMap.set(BoardPosition.Go, new Go(this));

        this.boardSpaceMap.set(BoardPosition.MediteranianAve, new PropertySpace(
            this, [BoardPosition.BalticAve], 60, 2));

        //this.boardSpaceMap.set(BoardPosition.CommunityChest1, new CommunityChest(this));

        this.boardSpaceMap.set(BoardPosition.BalticAve, new PropertySpace(
            this, [BoardPosition.MediteranianAve], 60, 4));

        this.boardSpaceMap.set(BoardPosition.IncomeTax, new IncomeTax(this));

        this.boardSpaceMap.set(BoardPosition.ReadingRailroad, new RailRoadSpace(
            this, [BoardPosition.PennsylvaniaRailroad, BoardPosition.BandORailroad, BoardPosition.ShortLine]));

        this.boardSpaceMap.set(BoardPosition.OrientalAve, new PropertySpace(
            this, [BoardPosition.VermontAve,BoardPosition.ConnecticutAve], 100, 6));

        //this.boardSpaceMap.set(BoardPosition.Chance1, new Chance1(this));

        this.boardSpaceMap.set(BoardPosition.VermontAve, new PropertySpace(
            this, [BoardPosition.OrientalAve,BoardPosition.ConnecticutAve], 100, 6));

        this.boardSpaceMap.set(BoardPosition.ConnecticutAve, new PropertySpace(
            this, [BoardPosition.OrientalAve,BoardPosition.VermontAve], 120, 8));

        //this.boardSpaceMap.set(BoardPosition.Jail, new Jail(this));

        this.boardSpaceMap.set(BoardPosition.StCharlesPlace, new PropertySpace(
            this, [BoardPosition.StatesAve,BoardPosition.VirginiaAve], 140, 10));

        this.boardSpaceMap.set(BoardPosition.ElectricCompany, new UtilitySpace(
            this, [BoardPosition.WaterWorks], 150));

        this.boardSpaceMap.set(BoardPosition.StatesAve, new PropertySpace(
            this, [BoardPosition.StCharlesPlace,BoardPosition.VirginiaAve], 140, 10));

        this.boardSpaceMap.set(BoardPosition.VirginiaAve, new PropertySpace(
            this, [BoardPosition.StCharlesPlace,BoardPosition.StatesAve], 160, 12));
        
        
        this.boardSpaceMap.set(BoardPosition.PennsylvaniaRailroad, new RailRoadSpace(
            this, [BoardPosition.BandORailroad, BoardPosition.ReadingRailroad, BoardPosition.ShortLine]));


        this.boardSpaceMap.set(BoardPosition.StJamesPlace, new PropertySpace(
            this, [BoardPosition.TennesseeAve,BoardPosition.NewYorkAve], 180, 14));

        //this.boardSpaceMap.set(BoardPosition.CommunityChest2, new CommunityChest(this));

        this.boardSpaceMap.set(BoardPosition.TennesseeAve, new PropertySpace(
            this, [BoardPosition.StJamesPlace,BoardPosition.NewYorkAve], 180, 14));

        this.boardSpaceMap.set(BoardPosition.NewYorkAve, new PropertySpace(
            this, [BoardPosition.StJamesPlace,BoardPosition.TennesseeAve], 200, 16));

        //this.boardSpaceMap.set(BoardPosition.FreeParking, new FreeParking(this));

        this.boardSpaceMap.set(BoardPosition.KentuckyAve, new PropertySpace(
            this, [BoardPosition.IllinoisAve,BoardPosition.IndianaAve], 220, 18));

        //this.boardSpaceMap.set(BoardPosition.Chance2, new Chance(this));

        this.boardSpaceMap.set(BoardPosition.IndianaAve, new PropertySpace(
            this, [BoardPosition.IllinoisAve,BoardPosition.KentuckyAve], 220, 18));

        this.boardSpaceMap.set(BoardPosition.IllinoisAve, new PropertySpace(
            this, [BoardPosition.KentuckyAve,BoardPosition.IndianaAve], 240, 20));

        this.boardSpaceMap.set(BoardPosition.BandORailroad, new RailRoadSpace(
            this, [BoardPosition.PennsylvaniaRailroad, BoardPosition.ReadingRailroad, BoardPosition.ShortLine]));

        this.boardSpaceMap.set(BoardPosition.AtlanticAve, new PropertySpace(
            this, [BoardPosition.VentnorAve,BoardPosition.MarvinGardens], 260, 22));

        this.boardSpaceMap.set(BoardPosition.VentnorAve, new PropertySpace(
            this, [BoardPosition.AtlanticAve,BoardPosition.MarvinGardens], 260, 22));

        this.boardSpaceMap.set(BoardPosition.WaterWorks, new UtilitySpace(
            this, [BoardPosition.ElectricCompany], 150));

        this.boardSpaceMap.set(BoardPosition.MarvinGardens, new PropertySpace(
            this, [BoardPosition.AtlanticAve,BoardPosition.VentnorAve], 280, 24));

        this.boardSpaceMap.set(BoardPosition.GoToJail, new GoToJail(this));

        this.boardSpaceMap.set(BoardPosition.PacificAve, new PropertySpace(
            this, [BoardPosition.NorthCarolinaAve,BoardPosition.PennsylvaniaAve], 300, 26));

        this.boardSpaceMap.set(BoardPosition.NorthCarolinaAve, new PropertySpace(
            this, [BoardPosition.PacificAve,BoardPosition.PennsylvaniaAve], 300, 26));

        //this.boardSpaceMap.set(BoardPosition.CommunityChest, new CommunityChest(this));

        this.boardSpaceMap.set(BoardPosition.PennsylvaniaAve, new PropertySpace(
            this, [BoardPosition.PacificAve,BoardPosition.NorthCarolinaAve], 320, 28));

        this.boardSpaceMap.set(BoardPosition.ShortLine, new RailRoadSpace(
            this, [BoardPosition.PennsylvaniaRailroad, BoardPosition.ReadingRailroad, BoardPosition.BandORailroad]));

        //this.boardSpaceMap.set(BoardPosition.Chance, new Chance(this));

        this.boardSpaceMap.set(BoardPosition.ParkPlace, new PropertySpace(
            this, [BoardPosition.Boardwalk], 350, 35));

        this.boardSpaceMap.set(BoardPosition.LuxuryTax, new LuxuryTax(this));

        this.boardSpaceMap.set(BoardPosition.Boardwalk, new PropertySpace(
            this, [BoardPosition.ParkPlace], 400, 50));
    }

    private getBoardSpace(position: BoardPosition): BoardSpace {
        let space: BoardSpace = this.boardSpaceMap.get(position);
        if (space === undefined) {
            space = new DefaultSpace(this);
        }
        return space;
    }

    /** method to define what happens when a player passes over this board position */
    public passOver(player: Player, position: BoardPosition) {
        this.getBoardSpace(position).passOver(player);
    }

    /** method to define what happens when a player lands on this board position */
    public landOn(player: Player, position: BoardPosition) {
        this.getBoardSpace(position).landOn(player);
    }

    /** 
     * every board space has an array of other board positions in the same group.
     * this method returns a count of all the positions owned by the same player token.
     * player token is optional, if not passed in, the count will be for all positions owned by any player.
     */
    public getCountOwnedInGroup(positions: BoardPosition[], owner?: PlayerToken): number {
        let count = 0;
        for (let position of positions) {
            let positionOwner: Player = this.getBoardSpace(position).getOwner();
            if (positionOwner !== undefined) {
                if (owner === undefined || positionOwner.getToken() === owner) {
                    count++;
                }
            }
        }
        return count;
    }

    /** gets the owner of this board position or undefined if not owned by any player */
    public getOwner(position: BoardPosition): PlayerToken {
        let player = this.getBoardSpace(position).getOwner();
        if (player === undefined) {
            return undefined;
        }
        return player.getToken();
    }
}
