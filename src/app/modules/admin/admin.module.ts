import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AccueilAdministrateurComponent} from './accueil-administrateur/accueil-administrateur.component';
import {AdminComponent} from './admin.component';
import {EtablissementComponent} from './etablissement/etablissement.component';
import {SharedModule} from '../../shared/shared.module';
import {ModalDialogComponent} from './modal/modal-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [
    AccueilAdministrateurComponent,
    AdminComponent,
    EtablissementComponent,
    ModalDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatStepperModule,
  ],
  exports: [
    AccueilAdministrateurComponent,
    AdminComponent,
    EtablissementComponent,
    ModalDialogComponent
  ],
  entryComponents: [ModalDialogComponent]
})
export class AdminModule { }
