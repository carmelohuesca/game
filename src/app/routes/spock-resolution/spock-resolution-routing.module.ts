import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpockResolutionComponent } from './spock-resolution.component';

const routes: Routes = [
  {
    path: 'spock-resolution',
    component: SpockResolutionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpockResolutionRoutingModule { }
