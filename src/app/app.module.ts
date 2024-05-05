import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { LoginrealComponent } from './loginreal/loginreal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { ModalTerminosComponent } from './modal-terminos/modal-terminos.component';

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
  { path: 'loginreal', component: LoginrealComponent },
  { path: 'merchPaypal', component: PrincipalComponent },
  
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
    LoginrealComponent,
    PrincipalComponent,
    ProductlistComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,
    ModalComponent,
    ModalTerminosComponent,
    
  ],
  imports: [
    CoolSocialLoginButtonsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LightgalleryModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right'
    }), // ToastrModule added
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
