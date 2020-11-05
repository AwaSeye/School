import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepresentantComponent} from './representant.component';

const routes: Routes = [
  {path: '', component: RepresentantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentantRoutingModule { }
