import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpockResolutionRoutingModule } from './spock-resolution-routing.module';
import { SpockResolutionComponent } from './spock-resolution.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SpockResolutionComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SpockResolutionRoutingModule
  ]
})
export class SpockResolutionModule { }
