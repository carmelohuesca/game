import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeExampleRoutingModule } from './time-example-routing.module';
import { TimeExampleComponent } from './time-example.component';
const TIME_EXAMPLE_COMPONENTS = [
  TimeExampleComponent
];
@NgModule({
  declarations: [
    ...TIME_EXAMPLE_COMPONENTS
  ],
  imports: [
    CommonModule,
    TimeExampleRoutingModule
  ],
  exports: [
    ...TIME_EXAMPLE_COMPONENTS
  ]
})
export class TimeExampleModule { }
