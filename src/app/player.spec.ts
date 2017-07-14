import { BoardPosition } from "app/board-positions.enum";
import { Player } from "app/player";
import { PlayerToken } from "app/player-tokens.enum";
import { FakeDice } from "app/fake-dice";

describe('Player Movements', () => {
    let board: Board;
    let player :Player;

    beforeAll(() => {
        board = new Board();
        player = new Player(PlayerToken.topHat);
    });

    beforeEach(() => {
        player.setPosition(BoardPosition.Go)
    });

    it('get initial position', () => {
        expect(player.getPosition()).toEqual(BoardPosition.Go);
    });

    it('Player on beginning location (numbered 0), rolls 7, ends up on location 7', () => {
        expect(player.move(new FakeDice(3,4))).toEqual(BoardPosition.Chance1);
    });

    it('Player on location numbered 39, rolls 6, ends up on location 5', () => {
        player.setPosition(BoardPosition.Boardwalk);
        expect(new FakeDice(3,3).roll()).toEqual(6);
        expect(player.move(new FakeDice(3,3))).toEqual(BoardPosition.ReadingRailroad);
    });

    it('During a turn a Player lands on Go and their balance increases by $200', () => {
        player.setPosition(BoardPosition.ParkPlace);
        let balance = player.getBalance();
        expect(player.move(new FakeDice(1,2))).toEqual(BoardPosition.Go);
        expect(player.getBalance()).toEqual(balance + 200);
    });

    it('During a turn a Player lands on some "normal" location and their balance does not change.', () => {
        player.setPosition(BoardPosition.ParkPlace);
        let balance = player.getBalance();
        expect(player.move(new FakeDice(1,1))).toEqual(BoardPosition.Boardwalk);
        expect(player.getBalance()).toEqual(balance);
    });

    it('Player starts before Go near the end of the Board, rolls enough to pass Go. The Player\'s balance increases by $200.', () => {
        player.setPosition(BoardPosition.ParkPlace);
        let balance = player.getBalance();
        expect(player.move(new FakeDice(2,2))).toEqual(BoardPosition.MediteranianAve);
        expect(player.getBalance()).toEqual(balance + 200);
    });

    it('Player starts on Go, takes a turn where the Player does not additionally land on or pass over Go. Their balance remains unchanged.', () => {
        player.setPosition(BoardPosition.Go);
        let balance = player.getBalance();
        expect(player.move(new FakeDice(2,3))).toEqual(BoardPosition.ReadingRailroad);
        expect(player.getBalance()).toEqual(balance);
    });

    it('Player passes go twice during a turn. Their balance increases by $200 each time for a total change of $400.', () => {
        player.setPosition(BoardPosition.Boardwalk);
        let balance = player.getBalance();
        player.move(new FakeDice(6,6));
        player.move(new FakeDice(6,6));
        player.move(new FakeDice(6,6));
        expect(player.move(new FakeDice(6,5))).toEqual(BoardPosition.OrientalAve);
        expect(player.getBalance()).toEqual(balance + 400);
    });

    it('Player starts before Go To Jail, lands on Go To Jail, ends up on Just Visiting and their balance is unchanged.', () => {
        player.setPosition(BoardPosition.WaterWorks);
        let balance = player.getBalance();
        expect(player.move(new FakeDice(1,1))).toEqual(BoardPosition.GoToJail);
        expect(player.getBalance()).toEqual(balance);
        expect(player.isInJail()).toBeFalsy();
    });

    it('Player starts before Go To Jail, rolls enough to pass over Go To Jail but not enough to land on or pass over go. Their balance is unchanged and they end up where the should based on what they rolled.', () => {
        player.setPosition(BoardPosition.WaterWorks);
        let balance = player.getBalance();
        expect(player.move(new FakeDice(1,2))).toEqual(BoardPosition.PacificAve);
        expect(player.getBalance()).toEqual(balance);
        expect(player.isInJail()).toBeFalsy();
    });

    it('During a turn, a Player with an initial total worth of $1800 lands on Income Tax. The balance decreases by $180.', () => {
        let balance = 1800;
        player.setBalance(balance);
        player.setPosition(BoardPosition.IncomeTax - 3);
        expect(player.move(new FakeDice(1,2))).toEqual(BoardPosition.IncomeTax);
        expect(player.getBalance()).toEqual(balance - 180);
    });

    it('During a turn, a Player with an initial total worth of $2200 lands on Income Tax. The balance decreases by $200.', () => {
        let balance = 2200;
        player.setBalance(balance);
        player.setPosition(BoardPosition.IncomeTax - 3);
        expect(player.move(new FakeDice(1,2))).toEqual(BoardPosition.IncomeTax);
        expect(player.getBalance()).toEqual(balance - 200);
    });

    it('During a turn, a Player with an initial total worth of $0 lands on Income Tax. The balance decreases by $0.', () => {
        let balance = 0;
        player.setBalance(balance);
        player.setPosition(BoardPosition.IncomeTax - 3);
        expect(player.move(new FakeDice(1,2))).toEqual(BoardPosition.IncomeTax);
        expect(player.getBalance()).toEqual(balance);
    });

    it('During a turn, a Player with an initial total worth of $2000 lands on Income Tax. The balance decreases by $200.', () => {
        let balance = 2000;
        player.setBalance(balance);
        player.setPosition(BoardPosition.IncomeTax - 3);
        expect(player.move(new FakeDice(1,2))).toEqual(BoardPosition.IncomeTax);
        expect(player.getBalance()).toEqual(balance - 200);        
    });

    it('During a turn, a Player passes over Income Tax. Nothing happens.', () => {
        let balance = player.getBalance();
        player.setPosition(BoardPosition.IncomeTax - 3);
        expect(player.move(new FakeDice(1,3))).toEqual(BoardPosition.ReadingRailroad);
        expect(player.getBalance()).toEqual(balance);        
    });

    it('Player takes a turn and lands on Luxury tax. Their balance decreases by $75.', () => {
        let balance = player.getBalance();
        player.setPosition(BoardPosition.LuxuryTax - 3);
        expect(player.move(new FakeDice(1,2))).toEqual(BoardPosition.LuxuryTax);
        expect(player.getBalance()).toEqual(balance - 75);        
    });

    it('Player passes Luxury Tax during a turn. Their balance is unchanged.', () => {
        let balance = player.getBalance();
        player.setPosition(BoardPosition.LuxuryTax - 3);
        expect(player.move(new FakeDice(1,3))).toEqual(BoardPosition.LuxuryTax + 1);
        expect(player.getBalance()).toEqual(balance);        
    });

});