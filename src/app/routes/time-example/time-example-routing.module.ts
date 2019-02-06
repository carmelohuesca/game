import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeExampleComponent } from './time-example.component';

const routes: Routes = [
  {
    path: 'time-example',
    component: TimeExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeExampleRoutingModule { }
