import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';

const GAME_COMPONENTS = [
  GameComponent
];

@NgModule({
  declarations: [
    ...GAME_COMPONENTS
  ],
  imports: [
    CommonModule
  ], exports: [
    ...GAME_COMPONENTS
  ]
})
export class GameModule { }
