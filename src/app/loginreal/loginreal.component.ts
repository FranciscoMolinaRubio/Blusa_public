/* import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ComunicacionesService } from '../servicios/comunicaciones.service';

@Component({
  selector: 'app-loginreal',
  templateUrl: './loginreal.component.html',
  styleUrls: ['./loginreal.component.css']
})
export class LoginrealComponent{

  loginUsuario: FormGroup;
  subscription: Subscription;
  logged = false;
  precioCesta = 0;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private miservicio: ComunicacionesService) {

    this.loginUsuario = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required]
    })
  }

  googleClick() {
    this.afAuth.signInWithPopup(new GoogleAuthProvider()).then((user) => {
      this.router.navigate(['./eventos']);
       this.toastr.success('Has entrado', 'Muy bien');
       this.logged = true;
       this.miservicio.setData(this.logged);
     }).catch((error) => {
       console.log(error);
       this.toastr.error(this.firebaseError(error.code), 'Error')
     })
  }

  login() {

    const mail = this.loginUsuario.value.mail;
    const pass = this.loginUsuario.value.pass;

    this.afAuth.signInWithEmailAndPassword(mail, pass).then((user) => {
     this.router.navigate(['./eventos']);
      this.toastr.success('Has entrado', 'Muy bien');
      this.logged = true;
      this.miservicio.setData(this.logged);
    }).catch((error) => {
      console.log(error);
      this.toastr.error(this.firebaseError(error.code), 'Error')
    }
    )
  }

  firebaseError(code: string) {
    switch (code) {
      case 'auth/invalid-email':
        return "Mail incorrecto";
      case 'auth/user-not-found':
        return "El usuario no existe";
      case 'auth/invalid-credential':
        return "Credenciales incorrectas";
      case 'auth/wrong-password':
        return "Contraseña incorrecta";
      case 'auth/missing-password':
        return "No ingresaste la contraseña";
      default:
        return "Error desconocido. Qué le vamos a hacer..."
    }
  }
}
 */

import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ComunicacionesService } from '../servicios/comunicaciones.service';
@Component({
  selector: 'app-loginreal',
  templateUrl: './loginreal.component.html',
  styleUrls: ['./loginreal.component.css']
})

export class LoginrealComponent{

  loginUsuario: FormGroup;
  subscription: Subscription;
  logged = false;
  precioCesta = 0;
  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private miservicio: ComunicacionesService) {
    this.loginUsuario = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required]
    })
  }


  googleClick() {
    this.afAuth.signInWithPopup(new GoogleAuthProvider()).then((user) => {
      this.router.navigate(['./eventos']);
       this.toastr.success('Has entrado', 'Muy bien');
       this.logged = true;
       this.miservicio.setData(this.logged);
     }).catch((error) => {
       console.log(error);
       this.toastr.error(this.firebaseError(error.code), 'Error')
     })
  }

  login() {

    const mail = this.loginUsuario.value.mail;
    const pass = this.loginUsuario.value.pass;
    this.afAuth.signInWithEmailAndPassword(mail, pass).then((user) => {
     this.router.navigate(['./eventos']);
      this.toastr.success('Has entrado', 'Muy bien');
      this.logged = true;
      this.miservicio.setData(this.logged);
    }).catch((error) => {
      console.log(error);
      this.toastr.error(this.firebaseError(error.code), 'Error')
    }
    )
  }
  firebaseError(code: string) {
    switch (code) {
      case 'auth/invalid-email':
        return "Mail incorrecto";
      case 'auth/user-not-found':
        return "El usuario no existe";
      case 'auth/invalid-credential':
        return "Credenciales incorrectas";
      case 'auth/wrong-password':
        return "Contraseña incorrecta";
      case 'auth/missing-password':
        return "No ingresaste la contraseña";
      default:
        return "Error desconocido. Qué le vamos a hacer..."
    }
  }
}