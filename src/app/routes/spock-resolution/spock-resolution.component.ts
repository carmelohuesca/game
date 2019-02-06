import { Component, OnInit, HostListener } from '@angular/core';
import { Game } from '../../components/game/Game';
const KEY_CODE = {
  ENTER: 13,
  R: 82,
  P: 80,
  T: 84,
  L: 76,
  S: 83
};
@Component({
  selector: 'app-spock-resolution',
  templateUrl: './spock-resolution.component.html',
  styleUrls: ['./spock-resolution.component.scss']
})
export class SpockResolutionComponent extends Game implements OnInit {

  static PLAYERS = {
    PENNY: 'PENNY',
    SHELDON: 'SHELDON'
  };
  playerOneSelected: boolean;
  turn: boolean;
  optionOne: string;
  optionTwo: string;

  score = {
    SHELDON: 0,
    PENNY: 0,
    RAJ: 0,
    LEONARD: 0,
    HOWARD: 0
  };


  constructor() {
    super(SpockResolutionComponent.PLAYERS.SHELDON, SpockResolutionComponent.PLAYERS.PENNY);
  }

  ngOnInit() {
    const period = 400;
    setTimeout(() => this.result = SpockResolutionComponent.OPTIONS.ROCK, 0);
    setTimeout(() => this.result = SpockResolutionComponent.OPTIONS.PAPER, period);
    setTimeout(() => this.result = SpockResolutionComponent.OPTIONS.SCISSORS, period * 2);
    setTimeout(() => this.result = SpockResolutionComponent.OPTIONS.LIZARD, period * 3);
    setTimeout(() => this.result = SpockResolutionComponent.OPTIONS.SPOCK, period * 4);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.ENTER) {
      if (this.optionOne && this.optionTwo) {
        this.play(this.optionOne, this.optionTwo);
        const winner = this.result;
        if (winner !== Game.RESULTS.DRAW) {
          this.scoreboard(winner);
        }
      }
    }
    if (event.keyCode === KEY_CODE.L) {
      this.chooseChoice(Game.OPTIONS.LIZARD);
    }
    if (event.keyCode === KEY_CODE.R) {
      this.chooseChoice(Game.OPTIONS.ROCK);
    }
    if (event.keyCode === KEY_CODE.P) {
      this.chooseChoice(Game.OPTIONS.PAPER);
    }
    if (event.keyCode === KEY_CODE.S) {
      this.chooseChoice(Game.OPTIONS.SPOCK);
    }
    if (event.keyCode === KEY_CODE.T) {
      this.chooseChoice(Game.OPTIONS.SCISSORS);
    }
  }

  scoreboard(winner: any) {
    this.score[winner]++;
    console.log(this.score);
  }

  chooseChoice(option: string) {
    if (!this.turn) {
      this.optionOne = option;
    } else {
      this.optionTwo = option;
    }
    this.changeTurn();
  }

  selectPlayer(person: string) {
    if (!this.playerOneSelected) {
      this.playerOne = person;
    } else {
      this.playerTwo = person;
    }
    this.playerOneSelected = !this.playerOneSelected;
  }

  changeTurn() {
    this.turn = !this.turn;
  }

}
