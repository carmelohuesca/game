export class Game {

  static OPTIONS = { ROCK: 'ROCK', PAPER: 'PAPER', SCISSORS: 'SCISSORS', LIZARD: 'LIZARD', SPOCK: 'SPOCK' };
  static RESULTS = { DRAW: 'DRAW', WINNER_ONE: 'WINNER_ONE', WINNER_TWO: 'WINNER_TWO' };
  static WINNING_OPTIONS_ONE = {
    ROCK: [Game.OPTIONS.SCISSORS, Game.OPTIONS.LIZARD],
    PAPER: [Game.OPTIONS.ROCK, Game.OPTIONS.SPOCK],
    SCISSORS: [Game.OPTIONS.PAPER, Game.OPTIONS.LIZARD],
    LIZARD: [Game.OPTIONS.PAPER, Game.OPTIONS.SPOCK],
    SPOCK: [Game.OPTIONS.ROCK, Game.OPTIONS.SCISSORS]
  };

  playerOne: string;
  playerTwo: string;
  round: number;
  result: string;

  constructor(playerOne: string, playerTwo: string) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.round = 0;
    this.result = Game.RESULTS.DRAW;
  }

  play(optionOne: string, optionTwo: string) {
    this.getWinner(optionOne, optionTwo);
    this.round++;
  }

  getWinner(optionOne: string, optionTwo: string) {
    if (optionOne === optionTwo) {
      this.result = Game.RESULTS.DRAW;
    } else {
      this.result = Game.WINNING_OPTIONS_ONE[optionOne].includes(optionTwo) ? Game.RESULTS.WINNER_ONE : Game.RESULTS.WINNER_TWO;
    }
  }

}
