import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importa AngularFireAuth para la autenticación
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

  // Declara las propiedades de la clase
  numeroArticulos: number = 0; // Representa el número de artículos
  isClicked: boolean = false; // Indica si el menú ha sido clickeado o no

  constructor(
    private afAuth: AngularFireAuth, // Inyecta AngularFireAuth para la autenticación
    private router: Router // Inyecta Router para la navegación
  ) {}

  /**
   * Función que realiza el logout del usuario y recarga la página
   * Después de cerrar la sesión, redirige al usuario a la página de inicio
   * @author Francisco Molina Rubio
   */
  logOut() {
    this.afAuth.signOut().then(() => location.reload()); // Cierra la sesión del usuario y recarga la página
    location.reload(); // Recarga la página
    this.router.navigate(["/"]); // Redirige al usuario a la página de inicio
  }

  /**
   * Función que despliega el menú en el formato móvil
   * Alterna la propiedad `isClicked`, que controla el despliegue del menú en dispositivos móviles
   * @author Francisco Molina Rubio
   */
  toggleClass() {
    this.isClicked = !this.isClicked; // Cambia el valor de `isClicked` de verdadero a falso o viceversa
  }
}