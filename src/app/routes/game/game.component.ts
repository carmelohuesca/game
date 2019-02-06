import { Component, OnInit } from '@angular/core';
import { Game } from '../../components/game/Game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent extends Game implements OnInit {

  constructor() {
    super('PEPE', 'JUAN');
    console.log(this);
  }

  ngOnInit() {
  }

}
