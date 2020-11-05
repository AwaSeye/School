import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilAdministrateurComponent} from './accueil-administrateur/accueil-administrateur.component';
import {EtablissementComponent} from './etablissement/etablissement.component';

const routes: Routes = [
  {path: '' , component: AccueilAdministrateurComponent},
  {path: 'etablissement', component: EtablissementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
