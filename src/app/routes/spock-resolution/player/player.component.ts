import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: string;
  @Input() score: any;
  @Input() isSelected: boolean;

  @Output() clicked: EventEmitter<string> = new EventEmitter();

  src: string;

  constructor() { }

  ngOnInit() {
    this.src = 'assets/img/personajes/' + this.player.toLowerCase() + '.png';
  }

  doClick(ev: any) {
    console.log(ev);
    this.clicked.emit(this.player);
  }


}
