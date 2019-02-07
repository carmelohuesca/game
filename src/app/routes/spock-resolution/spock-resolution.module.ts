import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpockResolutionRoutingModule } from './spock-resolution-routing.module';
import { SpockResolutionComponent } from './spock-resolution.component';
import { ComponentsModule } from '../../components/components.module';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    SpockResolutionComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SpockResolutionRoutingModule
  ], entryComponents: [
    PlayerComponent
  ]
})
export class SpockResolutionModule { }
