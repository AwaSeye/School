import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AccueilAdministrateurComponent} from './accueil-administrateur/accueil-administrateur.component';
import {AdminComponent} from './admin.component';


@NgModule({
  declarations: [
    AccueilAdministrateurComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AccueilAdministrateurComponent,
    AdminComponent,
  ]
})
export class AdminModule { }
