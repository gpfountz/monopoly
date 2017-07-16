import { LuxuryTax } from './boardspaces/luxury-tax';
import { DefaultSpace } from './boardspaces/default-space';
import { IncomeTax } from './boardspaces/income-tax';
import { Go } from './boardspaces/go';
import { BoardSpace } from './boardspaces/board-space';
import { BoardPosition } from 'app/board-positions.enum';
import { MediteranianAve } from "app/boardspaces/PropertySpaces/mediteranian-ave";
import { Player } from "app/player";
import { PlayerToken } from "app/player-tokens.enum";
import { BalticAve } from "app/boardspaces/PropertySpaces/baltic-ave";
import { ReadingRailroad } from "app/boardspaces/RailRoadSpaces/reading-railroad";
import { OrientalAve } from "app/boardspaces/PropertySpaces/oriental-ave";
import { VermontAve } from "app/boardspaces/PropertySpaces/vermont-ave";
import { ConnecticutAve } from "app/boardspaces/PropertySpaces/connecticut-ave";
import { StCharlesPlace } from "app/boardspaces/PropertySpaces/st-charles-place";
import { ElectricCompany } from "app/boardspaces/UtilitySpaces/electric-company";
import { StatesAve } from "app/boardspaces/PropertySpaces/states-ave";
import { VirginiaAve } from "app/boardspaces/PropertySpaces/virginia-ave";
import { PennsylvaniaRailroad } from "app/boardspaces/RailRoadSpaces/pennsylvania-railroad";
import { StJamesPlace } from "app/boardspaces/PropertySpaces/st-james-place";
import { TennesseeAve } from "app/boardspaces/PropertySpaces/tennessee-ave";
import { NewYorkAve } from "app/boardspaces/PropertySpaces/new-york-ave";
import { KentuckyAve } from "app/boardspaces/PropertySpaces/kentucky-ave";
import { IndianaAve } from "app/boardspaces/PropertySpaces/indiana-ave";
import { IllinoisAve } from "app/boardspaces/PropertySpaces/illinois-ave";
import { BAndORailroad } from "app/boardspaces/RailRoadSpaces/band-orailroad";
import { AtlanticAve } from "app/boardspaces/PropertySpaces/atlantic-ave";
import { VentnorAve } from "app/boardspaces/PropertySpaces/ventnor-ave";
import { WaterWorks } from "app/boardspaces/UtilitySpaces/water-works";
import { MarvinGardens } from "app/boardspaces/PropertySpaces/marvin-gardens";
import { PacificAve } from "app/boardspaces/PropertySpaces/pacific-ave";
import { NorthCarolinaAve } from "app/boardspaces/PropertySpaces/north-carolina-ave";
import { PennsylvaniaAve } from "app/boardspaces/PropertySpaces/pennsylvania-ave";
import { ShortLine } from "app/boardspaces/RailRoadSpaces/short-line";
import { ParkPlace } from "app/boardspaces/PropertySpaces/park-place";
import { Boardwalk } from "app/boardspaces/PropertySpaces/boardwalk";
import { GoToJail } from "app/boardspaces/go-to-jail";

export class Board {
    private boardSpaceMap: Map<BoardPosition, BoardSpace> = new Map<BoardPosition, BoardSpace>();

    constructor() {
        this.boardSpaceMap.set(BoardPosition.Go, new Go(this));
        this.boardSpaceMap.set(BoardPosition.MediteranianAve, new MediteranianAve(this));
        //this.boardSpaceMap.set(BoardPosition.CommunityChest1, new CommunityChest(this));
        this.boardSpaceMap.set(BoardPosition.BalticAve, new BalticAve(this));
        this.boardSpaceMap.set(BoardPosition.IncomeTax, new IncomeTax(this));
        this.boardSpaceMap.set(BoardPosition.ReadingRailroad, new ReadingRailroad(this));
        this.boardSpaceMap.set(BoardPosition.OrientalAve, new OrientalAve(this));
        //this.boardSpaceMap.set(BoardPosition.Chance1, new Chance1(this));
        this.boardSpaceMap.set(BoardPosition.VermontAve, new VermontAve(this));
        this.boardSpaceMap.set(BoardPosition.ConnecticutAve, new ConnecticutAve(this));
        //this.boardSpaceMap.set(BoardPosition.Jail, new Jail(this));
        this.boardSpaceMap.set(BoardPosition.StCharlesPlace, new StCharlesPlace(this));
        this.boardSpaceMap.set(BoardPosition.ElectricCompany, new ElectricCompany(this));
        this.boardSpaceMap.set(BoardPosition.StatesAve, new StatesAve(this));
        this.boardSpaceMap.set(BoardPosition.VirginiaAve, new VirginiaAve(this));
        this.boardSpaceMap.set(BoardPosition.PennsylvaniaRailroad, new PennsylvaniaRailroad(this));
        this.boardSpaceMap.set(BoardPosition.StJamesPlace, new StJamesPlace(this));
        //this.boardSpaceMap.set(BoardPosition.CommunityChest2, new CommunityChest(this));
        this.boardSpaceMap.set(BoardPosition.TennesseeAve, new TennesseeAve(this));
        this.boardSpaceMap.set(BoardPosition.NewYorkAve, new NewYorkAve(this));
        //this.boardSpaceMap.set(BoardPosition.FreeParking, new FreeParking(this));
        this.boardSpaceMap.set(BoardPosition.KentuckyAve, new KentuckyAve(this));
        //this.boardSpaceMap.set(BoardPosition.Chance2, new Chance(this));
        this.boardSpaceMap.set(BoardPosition.IndianaAve, new IndianaAve(this));
        this.boardSpaceMap.set(BoardPosition.IllinoisAve, new IllinoisAve(this));
        this.boardSpaceMap.set(BoardPosition.BandORailroad, new BAndORailroad(this));
        this.boardSpaceMap.set(BoardPosition.AtlanticAve, new AtlanticAve(this));
        this.boardSpaceMap.set(BoardPosition.VentnorAve, new VentnorAve(this));
        this.boardSpaceMap.set(BoardPosition.WaterWorks, new WaterWorks(this));
        this.boardSpaceMap.set(BoardPosition.MarvinGardens, new MarvinGardens(this));
        this.boardSpaceMap.set(BoardPosition.GoToJail, new GoToJail(this));
        this.boardSpaceMap.set(BoardPosition.PacificAve, new PacificAve(this));
        this.boardSpaceMap.set(BoardPosition.NorthCarolinaAve, new NorthCarolinaAve(this));
        //this.boardSpaceMap.set(BoardPosition.CommunityChest, new CommunityChest(this));
        this.boardSpaceMap.set(BoardPosition.PennsylvaniaAve, new PennsylvaniaAve(this));
        this.boardSpaceMap.set(BoardPosition.ShortLine, new ShortLine(this));
        //this.boardSpaceMap.set(BoardPosition.Chance, new Chance(this));
        this.boardSpaceMap.set(BoardPosition.ParkPlace, new ParkPlace(this));
        this.boardSpaceMap.set(BoardPosition.LuxuryTax, new LuxuryTax(this));
        this.boardSpaceMap.set(BoardPosition.Boardwalk, new Boardwalk(this));
    }

    private getBoardSpace(position: BoardPosition): BoardSpace {
        let space: BoardSpace = this.boardSpaceMap.get(position);
        if (space === undefined) {
            space = new DefaultSpace(this);
        }
        return space;
    }

    public passOver(player: Player, position: BoardPosition) {
        this.getBoardSpace(position).passOver(player);
    }

    public landOn(player: Player, position: BoardPosition) {
        this.getBoardSpace(position).landOn(player);
    }

    public getCountOwnedInGroup(positions: BoardPosition[], owner?: PlayerToken): number {
        let count = 0;
        if (owner === undefined) {
            // get count of owned by any player
            for (let position of positions) {
                if (this.getBoardSpace(position).getOwner() !== undefined) {
                    count++;
                }
            }
        } else {
            // get count of owned by this player
            for (let position of positions) {
                let positionOwner: Player = this.getBoardSpace(position).getOwner();
                if (positionOwner !== undefined && positionOwner.getToken() === owner) {
                    count++;
                }
            }
        }
        return count;
    }
}
