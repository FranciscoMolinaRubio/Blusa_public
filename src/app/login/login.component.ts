import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ModalTerminosComponent } from '../modal-terminos/modal-terminos.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  registrarUsuario: FormGroup; // Formulario para el registro de usuario
  loading: boolean = false; // Variable para controlar el estado de carga

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    public modalService2: NgbModal) {

    // Inicialización del formulario y sus validadores
    this.registrarUsuario = this.fb.group({
      mail: ['', [Validators.required, Validators.email]], // Campo de correo electrónico con validación
      pass: ['', Validators.required], // Campo de contraseña con validación
      repitepass: ['', Validators.required], // Campo de repetir contraseña con validación
      check: [false, Validators.requiredTrue] // Campo de aceptar términos y condiciones con validación
    })
  }

  /**
   * Función para registrar un nuevo usuario
   * Verifica que las contraseñas coincidan y que se hayan aceptado los términos y condiciones
   * Realiza el registro utilizando AngularFireAuth
   * @autor Francisco Molina Rubio
   */
  registrar() {
    const mail = this.registrarUsuario.value.mail; // Obtener el valor del correo electrónico del formulario
    const pass = this.registrarUsuario.value.pass; // Obtener el valor de la contraseña del formulario
    const repitepass = this.registrarUsuario.value.repitepass; // Obtener el valor de la repetición de contraseña del formulario
    const check2 = this.registrarUsuario.value.check; // Obtener el valor del checkbox de términos y condiciones del formulario

    // Verificar que las contraseñas coincidan
    if (pass !== repitepass) {
      this.toastr.error('Las contraseñas no coinciden', 'Error');
      return;
    } else if (!check2) { // Verificar que se hayan aceptado los términos y condiciones
      this.toastr.error('Debe aceptar las condiciones del servicio', 'Error');
    }

    // Mostrar carga mientras se procesa el registro
    this.loading = true;

    // Registro de usuario utilizando AngularFireAuth
    this.afAuth.createUserWithEmailAndPassword(mail, pass).then((user) => {
      this.loading = false; // Finaliza la carga
      this.router.navigate(['/loginreal']); // Redirige al usuario a la página de inicio de sesión
      this.toastr.success('Usuario registrado', 'Muy bien'); // Muestra un mensaje de éxito
    }).catch((error) => {
      this.loading = false; // Finaliza la carga
      console.log(error); // Registra el error en la consola
      this.toastr.error(this.firebaseError(error.code), 'Error'); // Muestra un mensaje de error utilizando la función firebaseError
    });
  }

  /**
   * Función que devuelve un mensaje de error según el código de error de Firebase
   * @param code Código de error de Firebase
   * @returns Mensaje de error correspondiente al código
   * @autor Francisco Molina Rubio
   */
  firebaseError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return "Mail ya registrado";
      case 'auth/weak-password':
        return "Contraseña débil";
      case 'auth/invalid-email':
        return "Correo no válido";
      case 'auth/missing-password':
        return "No ingresaste la contraseña";
      default:
        return "Error desconocido. Qué le vamos a hacer...";
    }
  }

  /**
   * Función para abrir el modal de términos y condiciones
   * Abre el modal utilizando NgbModal y ajusta el estilo del modal-backdrop para evitar superposiciones
   * @autor Francisco Molina Rubio
   */
  openModal2(): void {
    this.modalService2.open(ModalTerminosComponent, { scrollable: true, size: "lg" }); // Abre el modal de términos y condiciones
    setTimeout(() => {
      const modalElement = document.querySelector('.modal-backdrop'); // Selecciona el elemento modal-backdrop
      if (modalElement) {
        modalElement['style'].zIndex = '1'; // Ajusta el estilo para evitar superposiciones
      }
    }, 0);
  }
}