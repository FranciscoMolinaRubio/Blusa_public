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

  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    public modalService2: NgbModal) {

    this.registrarUsuario = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
      repitepass: ['', Validators.required],
      check: [false, Validators.requiredTrue]
    })
  }

  registrar() {

    const mail = this.registrarUsuario.value.mail;
    const pass = this.registrarUsuario.value.pass;
    const repitepass = this.registrarUsuario.value.repitepass;
    const check2 = this.registrarUsuario.value.check;

    if (pass !== repitepass) {
      this.toastr.error('Las contraseñas no coinciden', 'Error');
      return;
    } else if (!check2) {
      this.toastr.error('Debe aceptar las condiciones del servicio', 'Error');
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

   openModal2(): void {
    this.modalService2.open(ModalTerminosComponent,  {scrollable:true, size:"lg"}); 
     setTimeout(() => {
      const modalElement = document.querySelector('.modal-backdrop'); 
      if (modalElement) {
        modalElement['style'].zIndex = '1'; 
      }
    }, 0);  
  } 
}

