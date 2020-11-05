import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {RechercheCritereComponent} from './recherche-critere/recherche-critere.component';
import {ConnexionComponent} from '../../connexion/connexion.component';
import {RendezvousComponent} from './rendezvous/rendezvous.component';
import {AuthGuard} from '../../_helper/auth.guard';
import {InscriptionComponent} from './inscription/inscription.component';

const routes: Routes = [
  {path: '' , component: AccueilComponent},
  {path: 'critere' , component: RechercheCritereComponent},
  {path: 'rendezvous' , component: RendezvousComponent},
  {path: 'inscription' , component: InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
