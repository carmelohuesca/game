import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockModule } from './clock/clock.module';
import { GameModule } from './game/game.module';

const COMPONENT_MODULES = [
  ClockModule,
  GameModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...COMPONENT_MODULES
  ],
  exports: [
    ...COMPONENT_MODULES
  ]
})
export class ComponentsModule { }
