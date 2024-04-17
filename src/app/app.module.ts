import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightgalleryModule } from 'lightgallery/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { VideoComponent } from './video/video.component';
import { BioComponent } from './bio/bio.component';
import { EventosComponent } from './eventos/eventos.component';
import { RouterModule, Routes } from '@angular/router';
import { MusicaComponent } from './musica/musica.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { MerchComponent } from './merch/merch.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { LoginrealComponent } from './loginreal/loginreal.component';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

const appRoutes: Routes = [
  
    { path: '', component: InicioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'musica/:id', component: MusicaComponent },
    { path: 'musica', component: MusicaComponent },
    { path: 'video', component: VideoComponent },
    { path: 'bio', component: BioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'merch', component: MerchComponent },
    { path: 'loginreal', component: LoginrealComponent },
];

@NgModule({
  declarations: [		
    ContactoComponent,
    MusicaComponent,
    AppComponent,
    GaleriaComponent,
    InicioComponent,
    NavegacionComponent,
    VideoComponent,
    BioComponent,
    EventosComponent,
    LoginComponent,
    MerchComponent,
    LoginrealComponent,

   ],
  imports: [
    CommonModule,
    BrowserModule,

    AppRoutingModule,
    LightgalleryModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,

    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right'
    }), // ToastrModule added
    MatIconModule,
    MatBadgeModule,
    ReactiveFormsModule,


  ],
  providers: [
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
