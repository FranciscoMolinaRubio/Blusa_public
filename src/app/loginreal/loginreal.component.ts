import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loginreal',
  templateUrl: './loginreal.component.html',
  styleUrls: ['./loginreal.component.css']
})
export class LoginrealComponent/*  implements OnInit  */ {

  loginUsuario: FormGroup;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router) {

    this.loginUsuario = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required]
    })
  }


  login() {

    const mail = this.loginUsuario.value.mail;
    const pass = this.loginUsuario.value.pass;

    this.afAuth.signInWithEmailAndPassword(mail, pass).then((user) => {
      this.router.navigate(['./merch']);
      this.toastr.success('Has entrado', 'Muy bien')
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
