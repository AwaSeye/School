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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { RepresentantComponent } from './representant/representant.component';


@NgModule({
  declarations: [
    AccueilAdministrateurComponent,
    AdminComponent,
    EtablissementComponent,
    ModalDialogComponent,
    RepresentantComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule
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
