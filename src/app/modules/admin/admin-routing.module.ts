import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilAdministrateurComponent} from './accueil-administrateur/accueil-administrateur.component';

const routes: Routes = [
  {path: '' , component: AccueilAdministrateurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
