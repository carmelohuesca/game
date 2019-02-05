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

  results = {
    ROCK: {
      SCISSORS: Game.RESULTS.WINNER_ONE,
      LIZARD: Game.RESULTS.WINNER_ONE,
      SPOCK: Game.RESULTS.WINNER_TWO,
      PAPER: Game.RESULTS.WINNER_TWO
    },
    PAPER: {
      ROCK: Game.RESULTS.WINNER_ONE,
      LIZARD: Game.RESULTS.WINNER_TWO,
      SPOCK: Game.RESULTS.WINNER_ONE,
      SCISSORS: Game.RESULTS.WINNER_TWO
    },
    SCISSORS: {
      ROCK: Game.RESULTS.WINNER_TWO,
      LIZARD: Game.RESULTS.WINNER_ONE,
      SPOCK: Game.RESULTS.WINNER_TWO,
      PAPER: Game.RESULTS.WINNER_ONE
    },
    LIZARD: {
      ROCK: Game.RESULTS.WINNER_TWO,
      SCISSORS: Game.RESULTS.WINNER_TWO,
      SPOCK: Game.RESULTS.WINNER_ONE,
      PAPER: Game.RESULTS.WINNER_ONE
    },
    SPOCK: {
      ROCK: Game.RESULTS.WINNER_ONE,
      SCISSORS: Game.RESULTS.WINNER_ONE,
      LIZZARD: Game.RESULTS.WINNER_TWO,
      PAPER: Game.RESULTS.WINNER_TWO
    }
  };

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
      if (optionOne === Game.OPTIONS.ROCK && optionTwo === Game.OPTIONS.PAPER) {
        this.result = Game.RESULTS.WINNER_TWO;
      } else {
        this.getWinner(optionOne, optionTwo);
      }
    }
    this.round++;
  }

  getWinner(optionOne: string, optionTwo: string) {
    this.result = this.results[optionOne][optionTwo];
    // if (optionOne === Game.OPTIONS.PAPER && optionTwo === Game.OPTIONS.SCISSORS) {
    //   this.result = Game.RESULTS.WINNER_TWO;
    // } else {
    //   if (optionOne === Game.OPTIONS.SCISSORS && optionTwo === Game.OPTIONS.ROCK) {
    //     this.result = Game.RESULTS.WINNER_TWO;
    //   } else {
    //     this.result = Game.RESULTS.WINNER_ONE;
    //   }
    // }
  }

}
