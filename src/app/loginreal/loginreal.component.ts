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

export class LoginrealComponent {

  // Propiedades de la clase
  loginUsuario: FormGroup; // Formulario para iniciar sesión
  subscription: Subscription; // Suscripción para escuchar cambios
  logged = false; // Indicador de usuario autenticado
  precioCesta = 0; // Precio total de la cesta de compra

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private miservicio: ComunicacionesService) {

    // Inicialización del formulario de inicio de sesión y sus validadores
    this.loginUsuario = this.fb.group({
      mail: ['', [Validators.required, Validators.email]], // Campo de correo electrónico con validación
      pass: ['', Validators.required] // Campo de contraseña con validación
    });
  }

  /**
   * Función para iniciar sesión utilizando la autenticación de Google
   * Redirige al usuario a la página de eventos si la autenticación es exitosa
   * Muestra un mensaje de éxito y actualiza el estado de autenticación
   * @autor Francisco Molina Rubio
   */
  googleClick() {
    this.afAuth.signInWithPopup(new GoogleAuthProvider()).then((user) => {
      this.router.navigate(['./eventos']); // Redirige al usuario a la página de eventos
      this.toastr.success('Has entrado', 'Muy bien'); // Muestra un mensaje de éxito
      this.logged = true; // Actualiza el estado de autenticación
      this.miservicio.setData(this.logged); // Envía el estado de autenticación al servicio de comunicaciones
    }).catch((error) => {
      console.log(error); // Registra el error en la consola
      this.toastr.error(this.firebaseError(error.code), 'Error'); // Muestra un mensaje de error utilizando la función firebaseError
    });
  }

  /**
   * Función para iniciar sesión utilizando correo electrónico y contraseña
   * Redirige al usuario a la página de eventos si la autenticación es exitosa
   * Muestra un mensaje de éxito y actualiza el estado de autenticación
   * @autor Francisco Molina Rubio
   */
  login() {
    const mail = this.loginUsuario.value.mail; // Obtiene el valor del correo electrónico del formulario
    const pass = this.loginUsuario.value.pass; // Obtiene el valor de la contraseña del formulario

    // Inicia sesión utilizando correo electrónico y contraseña
    this.afAuth.signInWithEmailAndPassword(mail, pass).then((user) => {
      this.router.navigate(['./eventos']); // Redirige al usuario a la página de eventos
      this.toastr.success('Has entrado', 'Muy bien'); // Muestra un mensaje de éxito
      this.logged = true; // Actualiza el estado de autenticación
      this.miservicio.setData(this.logged); // Envía el estado de autenticación al servicio de comunicaciones
    }).catch((error) => {
      console.log(error); // Registra el error en la consola
      this.toastr.error(this.firebaseError(error.code), 'Error'); // Muestra un mensaje de error utilizando la función firebaseError
    });
  }

  /**
   * Función para manejar los errores de autenticación y mostrar mensajes adecuados
   * @param code Código de error de autenticación
   * @returns Mensaje de error correspondiente al código
   * @autor Francisco Molina Rubio
   */
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
        return "Error desconocido. Qué le vamos a hacer...";
    }
  }
}