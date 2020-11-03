import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AccueilAdministrateurComponent} from './accueil-administrateur/accueil-administrateur.component';
import {AdminComponent} from './admin.component';
import {EtablissementComponent} from './etablissement/etablissement.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    AccueilAdministrateurComponent,
    AdminComponent,
    EtablissementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports: [
    AccueilAdministrateurComponent,
    AdminComponent,
    EtablissementComponent
  ]
})
export class AdminModule { }
