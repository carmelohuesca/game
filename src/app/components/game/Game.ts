export class Game {

  static OPTIONS = {
    ROCK: 'ROCK',
    PAPER: 'PAPER',
    SCISSORS: 'SCISSORS',
    LIZARD: 'LIZARD',
    SPOCK: 'SPOCK'
  };

  static RESULTS = {
    DRAW: 'DRAW',
    WINNER_ONE: 'WINNER_ONE',
    WINNER_TWO: 'WINNER_TWO'
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
    if (optionOne === optionTwo) {
      this.result = Game.RESULTS.DRAW;
    } else {
      this.result = '';
    }
    this.round++;
  }

}
