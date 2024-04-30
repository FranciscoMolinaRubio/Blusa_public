import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router) {

    this.registrarUsuario = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
      repitepass: ['', Validators.required]
    })
  }

  registrar() {

    const mail = this.registrarUsuario.value.mail;
    const pass = this.registrarUsuario.value.pass;
    const repitepass = this.registrarUsuario.value.repitepass;

    if (pass !== repitepass) {
      this.toastr.error('Las contraseñas no coinciden', 'Error');
      return;
    }
    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(mail, pass).then((user) => {
      this.loading = false;
      this.router.navigate(['/loginreal']);
      this.toastr.success('Usuario registrado', 'Muy bien')
    }).catch((error) => {
      this.loading = false;
      console.log(error);
      this.toastr.error(this.firebaseError(error.code), 'Error')
    }
    )
  }

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
        return "Error desconocido. Qué le vamos a hacer..."
    }
  }
}
