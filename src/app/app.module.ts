import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './modules/user/accueil/accueil.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { NavbarComponent } from './modules/user/navbar/navbar.component';
import { RechercheCritereComponent } from './modules/user/recherche-critere/recherche-critere.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PiedPageComponent } from './modules/user/pied-page/pied-page.component';
import { AccueilAdministrateurComponent } from './modules/admin/accueil-administrateur/accueil-administrateur.component';
import { RendezvousComponent } from './modules/user/rendezvous/rendezvous.component';
import { AdminModule } from './modules/admin/admin.module';
import { RepresentantModule } from './modules/representant/representant.module';
import { UserModule } from './modules/user/user.module';
import {UserComponent} from './modules/user/user.component';
import {AdminComponent} from './modules/admin/admin.component';
import {RepresentantComponent} from './modules/representant/representant.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './_helper/jwt.interceptor';
import {ErrorInterceptor} from './_helper/error.interceptor';
import {fakeBackendProvider} from './_helper/fake-backend';
import {AuthentificationService} from './_services/authentification.service';
import {ApiService} from './_services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { EtablissementComponent } from './modules/admin/etablissement/etablissement.component';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
    AuthentificationService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
