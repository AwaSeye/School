import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './modules/user/accueil/accueil.component';
import {RechercheCritereComponent} from './modules/user/recherche-critere/recherche-critere.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {AccueilAdministrateurComponent} from './modules/admin/accueil-administrateur/accueil-administrateur.component';
import {RendezvousComponent} from './modules/user/rendezvous/rendezvous.component';
import {AuthGuard} from './_helper/auth.guard';


const routes: Routes = [
  { path: '', component: AccueilComponent, },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module')
      .then(mod => mod.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module')
      .then(mod => mod.UserModule)
  },
  {
    path: 'representant',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/representant/representant.module')
      .then(mod => mod.RepresentantModule)
  },
  {
    path: 'connexion',
    component: ConnexionComponent
  },

  { path: '**', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
