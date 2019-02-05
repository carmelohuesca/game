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

  constructor(playerOne: string, playerTwo: string) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }
}
