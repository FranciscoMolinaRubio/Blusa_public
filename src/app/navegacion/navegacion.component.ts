import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';
import { ComunicacionesService } from '../servicios/comunicaciones.service';



@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'

})
export class NavegacionComponent {
  numeroArticulos: number = 0;
  


  constructor(
 private afAuth: AngularFireAuth, 
    private router: Router,
    private comunicacionesService: ComunicacionesService) {
  }

  ngOnInit(): void{
    this.comunicacionesService.numeroArticulos.subscribe(
      numeroArticulos =>{this.numeroArticulos=numeroArticulos} 
    )
  }

  logOut() {
    this.afAuth.signOut().then(()=> this.router.navigate(['/loginreal']))
  }
 
  isClicked: boolean = false;

  toggleClass() {
    this.isClicked = !this.isClicked;
  }
  }
  
