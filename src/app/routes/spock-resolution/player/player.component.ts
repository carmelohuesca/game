import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: string;
  @Input() score: any;

  src: string;

  constructor() { }

  ngOnInit() {
    this.src = 'assets/img/personajes/' + this.player.toLowerCase() + '.png';
  }



}
