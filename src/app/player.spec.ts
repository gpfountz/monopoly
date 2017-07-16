import { BoardPosition } from "app/board-positions.enum";
import { Player } from "app/player";
import { PlayerToken } from "app/player-tokens.enum";
import { FakeDice } from "app/fake-dice";
import { Board } from "app/board";

describe('Player Movements', () => {
    let board: Board;
    let player :Player;

    beforeAll(() => {
        player = new Player(PlayerToken.topHat);
    });

    beforeEach(() => {
        board = new Board();
        player.reset();
    });

    it('get initial position', () => {
        expect(player.getPosition()).toEqual(BoardPosition.Go);
    });

    it('Player on beginning location (numbered 0), rolls 7, ends up on location 7', () => {
        expect(player.move(board, new FakeDice(3,4))).toEqual(BoardPosition.Chance1);
    });

    it('Player on location numbered 39, rolls 5, ends up on location 4', () => {
        player.setPosition(BoardPosition.Boardwalk);
        expect(player.move(board, new FakeDice(3,2))).toEqual(BoardPosition.IncomeTax);
    });

    it('During a turn a Player lands on Go and their balance increases by $200', () => {
        player.setPosition(BoardPosition.ParkPlace);
        let balance = player.getBalance();
        expect(player.move(board, new FakeDice(1,2))).toEqual(BoardPosition.Go);
        expect(player.getBalance()).toEqual(balance + 200);
    });

    it('During a turn a Player lands on some "normal" location and their balance does not change.', () => {
        player.setPosition(BoardPosition.FreeParking - 3);
        let balance = player.getBalance();
        expect(player.move(board, new FakeDice(1,2))).toEqual(BoardPosition.FreeParking);
        expect(player.getBalance()).toEqual(balance);
    });

    it('Player starts before Go near the end of the Board, rolls enough to pass Go. The Player\'s balance increases by $200.', () => {
        player.setPosition(BoardPosition.Boardwalk);
        let balance = player.getBalance();
        expect(player.move(board, new FakeDice(5,6))).toEqual(BoardPosition.Jail);
        expect(player.getBalance()).toEqual(balance + 200);
    });

    it('Player starts on Go, takes a turn where the Player does not additionally land on or pass over Go. Their balance remains unchanged.', () => {
        player.setPosition(BoardPosition.Go);
        player.move(board, new FakeDice(2,3)); // move to ReadingRailroad and buy it so when we land it during test, cash balance will not change
        player.setPosition(BoardPosition.Go);
        let balance = player.getBalance();
        expect(player.move(board, new FakeDice(2,3))).toEqual(BoardPosition.ReadingRailroad);
        expect(player.getBalance()).toEqual(balance);
    });

    it('Player passes go twice during a turn. Their balance increases by $200 each time for a total change of $400.', () => {
        player.setPosition(BoardPosition.Boardwalk);
        player.move(board, new FakeDice(6,5)); // move to and buy these properties
        player.move(board, new FakeDice(6,5));
        player.move(board, new FakeDice(6,5));
        player.move(board, new FakeDice(6,5));
        player.setPosition(BoardPosition.Boardwalk);
        let balance = player.getBalance();
        player.move(board, new FakeDice(6,5));
        player.move(board, new FakeDice(6,5));
        player.move(board, new FakeDice(6,5));
        expect(player.move(board, new FakeDice(6,5))).toEqual(BoardPosition.BalticAve);
        expect(player.getBalance()).toEqual(balance + 400);
    });

    it('Player starts before Go To Jail, lands on Go To Jail, ends up on Just Visiting and their balance is unchanged.', () => {
        player.setPosition(BoardPosition.GoToJail - 3);
        let balance = player.getBalance();
        expect(player.move(board, new FakeDice(1,2))).toEqual(BoardPosition.Jail);
        expect(player.getBalance()).toEqual(balance);
        expect(player.isInJail()).toBeTruthy();
    });

    it('Player starts before Go To Jail, rolls enough to pass over Go To Jail but not enough to land on or pass over go. Their balance is unchanged and they end up where the should based on what they rolled.', () => {
        player.setPosition(BoardPosition.PacificAve - 3);
        player.move(board, new FakeDice(1,2)); // move to pacific ave and buy it so when we land it during test, cash balance will not change
        player.setPosition(BoardPosition.PacificAve - 3);
        let balance = player.getBalance();
        expect(player.move(board, new FakeDice(1,2))).toEqual(BoardPosition.PacificAve);
        expect(player.getBalance()).toEqual(balance);
        expect(player.isInJail()).toBeFalsy();
    });

    it('During a turn, a Player with an initial total worth of $1800 lands on Income Tax. The balance decreases by $180.', () => {
        let balance = 1800;
        player.setBalance(balance);
        player.setPosition(BoardPosition.IncomeTax - 3);
        expect(player.move(board, new FakeDice(1,2))).toEqual(BoardPosition.IncomeTax);
        expect(player.getBalance()).toEqual(balance - 180);
    });

    it('During a turn, a Player with an initial total worth of $2200 lands on Income Tax. The balance decreases by $200.', () => {
        let balance = 2200;
        player.setBalance(balance);
        player.setPosition(BoardPosition.IncomeTax - 3);
        expect(player.move(board, new FakeDice(1,2))).toEqual(BoardPosition.IncomeTax);
        expect(player.getBalance()).toEqual(balance - 200);
    });

    it('During a turn, a Player with an initial total worth of $0 lands on Income Tax. The balance decreases by $0.', () => {
        let balance = 0;
        player.setBalance(balance);
        player.setPosition(BoardPosition.IncomeTax - 3);
        expect(player.move(board, new FakeDice(1,2))).toEqual(BoardPosition.IncomeTax);
        expect(player.getBalance()).toEqual(balance);
    });

    it('During a turn, a Player with an initial total worth of $2000 lands on Income Tax. The balance decreases by $200.', () => {
        let balance = 2000;
        player.setBalance(balance);
        player.setPosition(BoardPosition.IncomeTax - 3);
        expect(player.move(board, new FakeDice(1,2))).toEqual(BoardPosition.IncomeTax);
        expect(player.getBalance()).toEqual(balance - 200);        
    });

    it('During a turn, a Player passes over Income Tax. Nothing happens.', () => {
        player.setPosition(BoardPosition.ReadingRailroad - 4);
        player.move(board, new FakeDice(1,3)); // move to ReadingRailroad and buy it so when we land it during test, cash balance will not change
        let balance = player.getBalance();
        player.setPosition(BoardPosition.ReadingRailroad - 4);
        expect(player.move(board, new FakeDice(1,3))).toEqual(BoardPosition.ReadingRailroad);
        expect(player.getBalance()).toEqual(balance);        
    });

    it('Player takes a turn and lands on Luxury tax. Their balance decreases by $75.', () => {
        let balance = player.getBalance();
        player.setPosition(BoardPosition.LuxuryTax - 3);
        expect(player.move(board, new FakeDice(1,2))).toEqual(BoardPosition.LuxuryTax);
        expect(player.getBalance()).toEqual(balance - 75);        
    });

    it('Player passes Luxury Tax during a turn. Their balance is unchanged.', () => {
        player.setPosition(BoardPosition.ParkPlace);
        player.move(board, new FakeDice(1,1)); // move to boardwalk and buy it so when we land it during test, cash balance will not change
        let balance = player.getBalance();
        player.setPosition(BoardPosition.LuxuryTax - 3);
        expect(player.move(board, new FakeDice(1,3))).toEqual(BoardPosition.LuxuryTax + 1);
        expect(player.getBalance()).toEqual(balance);        
    });

});

describe('Release 3 Player Buys Property', () => {
    let board: Board;
    let player :Player;

    beforeAll(() => {
        player = new Player(PlayerToken.topHat);
    });

    beforeEach(() => {
        board = new Board();
        player.reset();
    });

    it('Land on a Property that is not owned. After turn, property is owned and balance decreases by cost of property.', () => {
        let balance = player.getBalance();
        expect(player.move(board, new FakeDice(1,2))).toEqual(BoardPosition.BalticAve);
        expect(player.getBalance()).toEqual(balance - 60); // first time we buy it
        expect(board.getOwner(BoardPosition.BalticAve)).toBeDefined();
    });

    it('Land on a Property that I own, nothing happens.', () => {
        let balance = player.getBalance();
        expect(player.move(board, new FakeDice(1,2))).toEqual(BoardPosition.BalticAve);
        expect(player.getBalance()).toEqual(balance - 60); // first time we buy it
        player.setPosition(BoardPosition.Go);
        expect(player.move(board, new FakeDice(1,2))).toEqual(BoardPosition.BalticAve);
        expect(player.getBalance()).toEqual(balance - 60); //second time we already own it, so balance does not change
    });

    it('Pass over an unowned Property, nothing happens.', () => {
        let balance = player.getBalance();
        player.setPosition(BoardPosition.FreeParking - 5);
        expect(player.move(board, new FakeDice(2,3))).toEqual(BoardPosition.FreeParking);
        expect(player.getBalance()).toEqual(balance);
    });

});

describe('Release 3 Player Pays Rent', () => {
    let board: Board;
    let player :Player;

    beforeAll(() => {
        player = new Player(PlayerToken.topHat);
    });

    beforeEach(() => {
        board = new Board();
        player.reset();
    });

    // Land on a Property owned by other player, player pays rent to owner. Player's balance decreases by rent amount. Owners balance increases by rent amount.

    it('land on Railroad, pay rent is 25, 50, 100, 200 depending on how many are owned by owner (1 - 4).', () => {
        let otherPlayer: Player = new Player(PlayerToken.horse);
        otherPlayer.setPosition(BoardPosition.ReadingRailroad - 3);
        otherPlayer.move(board, new FakeDice(1,2)); // horse lands on and buys ReadingRailroad
        let otherPlayerBalance: number = otherPlayer.getBalance();
        let balance: number = player.getBalance();
        player.setPosition(BoardPosition.ReadingRailroad - 3);
        player.move(board, new FakeDice(1,2));
        expect(player.getBalance()).toEqual(balance - 25);
        expect(otherPlayer.getBalance()).toEqual(otherPlayerBalance + 25);

        otherPlayer.move(board, new FakeDice(6,4));
        otherPlayerBalance = otherPlayer.getBalance();
        balance = player.getBalance();
        player.move(board, new FakeDice(6,4));
        expect(player.getBalance()).toEqual(balance - 50);
        expect(otherPlayer.getBalance()).toEqual(otherPlayerBalance + 50);

        otherPlayer.move(board, new FakeDice(6,4));
        otherPlayerBalance = otherPlayer.getBalance();
        balance = player.getBalance();
        player.move(board, new FakeDice(6,4));
        expect(player.getBalance()).toEqual(balance - 100);
        expect(otherPlayer.getBalance()).toEqual(otherPlayerBalance + 100);

        otherPlayer.move(board, new FakeDice(6,4));
        otherPlayerBalance = otherPlayer.getBalance();
        balance = player.getBalance();
        player.move(board, new FakeDice(6,4));
        expect(player.getBalance()).toEqual(balance - 200);
        expect(otherPlayer.getBalance()).toEqual(otherPlayerBalance + 200);
    });

    it('If landing on Utility and only one Utility owned, rent is 4 times current value on Dice.', () => {
        let otherPlayer: Player = new Player(PlayerToken.horse);
        otherPlayer.setPosition(BoardPosition.ElectricCompany - 3);
        otherPlayer.move(board, new FakeDice(1,2)); // horse lands on and buys ElectricCompany
        let otherPlayerBalance: number = otherPlayer.getBalance();
        let balance: number = player.getBalance();
        player.setPosition(BoardPosition.ElectricCompany - 3);
        player.move(board, new FakeDice(1,2));
        expect(player.getBalance()).toEqual(balance - 12);
        expect(otherPlayer.getBalance()).toEqual(otherPlayerBalance + 12);
    });

    it('If landing on Utility and both owned (not necessarily by same Player), rent is 10 times current value on Dice.', () => {
        let otherPlayer: Player = new Player(PlayerToken.horse);
        otherPlayer.setPosition(BoardPosition.ElectricCompany - 3);
        otherPlayer.move(board, new FakeDice(1,2)); // horse lands on and buys ElectricCompany
        let anotherPlayer: Player = new Player(PlayerToken.car);
        otherPlayer.setPosition(BoardPosition.WaterWorks - 3);
        otherPlayer.move(board, new FakeDice(1,2)); // car lands on and buys WaterWorks
        let otherPlayerBalance: number = otherPlayer.getBalance();
        let balance: number = player.getBalance();
        player.setPosition(BoardPosition.ElectricCompany - 3);
        player.move(board, new FakeDice(1,2));
        expect(player.getBalance()).toEqual(balance - 30);
        expect(otherPlayer.getBalance()).toEqual(otherPlayerBalance + 30);
    });

    it('If landing on Real Estate and not all in the same Property Group are owned, rent is stated rent value.', () => {
        let otherPlayer: Player = new Player(PlayerToken.horse);
        otherPlayer.setPosition(BoardPosition.OrientalAve - 3);
        otherPlayer.move(board, new FakeDice(1,2)); // horse lands on and buys OrientalAve
        let otherPlayerBalance: number = otherPlayer.getBalance();
        let balance: number = player.getBalance();
        player.setPosition(BoardPosition.OrientalAve - 3);
        player.move(board, new FakeDice(1,2));
        expect(player.getBalance()).toEqual(balance - 6);
        expect(otherPlayer.getBalance()).toEqual(otherPlayerBalance + 6);

        otherPlayer.setPosition(BoardPosition.VermontAve - 3);
        otherPlayer.move(board, new FakeDice(1,2)); // horse lands on and buys VermontAve
        otherPlayerBalance = otherPlayer.getBalance();
        balance = player.getBalance();
        player.setPosition(BoardPosition.OrientalAve - 3);
        player.move(board, new FakeDice(1,2));
        expect(player.getBalance()).toEqual(balance - 6);
        expect(otherPlayer.getBalance()).toEqual(otherPlayerBalance + 6);

        player.setPosition(BoardPosition.ConnecticutAve - 3);
        player.move(board, new FakeDice(1,2)); // player other than horse lands on and buys ConnecticutAve
        otherPlayerBalance = otherPlayer.getBalance();
        balance = player.getBalance();
        player.setPosition(BoardPosition.OrientalAve - 3);
        player.move(board, new FakeDice(1,2));
        expect(player.getBalance()).toEqual(balance - 6); // all properties in group are owned by horse
        expect(otherPlayer.getBalance()).toEqual(otherPlayerBalance + 6);
    });

    it('If landing on Real Estate and Owner owns all in the same Property Group, rent is 2 times stated rent value.', () => {
        let otherPlayer: Player = new Player(PlayerToken.horse);
        otherPlayer.setPosition(BoardPosition.OrientalAve - 3);
        otherPlayer.move(board, new FakeDice(1,2)); // horse lands on and buys OrientalAve
        otherPlayer.setPosition(BoardPosition.VermontAve - 3);
        otherPlayer.move(board, new FakeDice(1,2)); // horse lands on and buys VermontAve
        otherPlayer.setPosition(BoardPosition.ConnecticutAve - 3);
        otherPlayer.move(board, new FakeDice(1,2)); // horse lands on and buys ConnecticutAve
        let otherPlayerBalance: number = otherPlayer.getBalance();
        let balance: number = player.getBalance();
        player.setPosition(BoardPosition.OrientalAve - 3);
        player.move(board, new FakeDice(1,2));
        expect(player.getBalance()).toEqual(balance - 12); // all properties in group are owned by horse
        expect(otherPlayer.getBalance()).toEqual(otherPlayerBalance + 12);
    });
});