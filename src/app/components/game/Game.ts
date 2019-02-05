export class Game {

  static OPTIONS = {
    ROCK: 'ROCK',
    PAPER: 'PAPER',
    SCISSORS: 'SCISSORS',
    LIZARD: 'LIZARD',
    SPOCK: 'SPOCK'
  };

  playerOne: string;
  playerTwo: string;

  constructor(playerOne: string, playerTwo: string) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }
}
