import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModule } from './game/game.module';
import { TimeExampleModule } from './time-example/time-example.module';

const ROUTE_MODULES = [
  GameModule,
  TimeExampleModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...ROUTE_MODULES
  ],
  exports: [
    ...ROUTE_MODULES
  ]
})
export class RoutesModule { }
