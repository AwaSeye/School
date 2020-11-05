import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {AccueilComponent} from './accueil/accueil.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RechercheCritereComponent} from './recherche-critere/recherche-critere.component';
import {ConnexionComponent} from '../../connexion/connexion.component';
import {PiedPageComponent} from './pied-page/pied-page.component';
import {AccueilAdministrateurComponent} from '../admin/accueil-administrateur/accueil-administrateur.component';
import {RendezvousComponent} from './rendezvous/rendezvous.component';
import {UserComponent} from './user.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AccueilComponent,
    NavbarComponent,
    RechercheCritereComponent,
    PiedPageComponent,
    RendezvousComponent,
    UserComponent,
    InscriptionComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    AccueilComponent,
    NavbarComponent,
    RechercheCritereComponent,
    PiedPageComponent,
    RendezvousComponent,
    UserComponent,
  ]
})
export class UserModule { }
