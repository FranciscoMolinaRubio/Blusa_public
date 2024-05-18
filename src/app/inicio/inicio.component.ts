import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  /**
   * Función que desplaza la vista hacia el elemento con el id 'bloque2'
   * @autor Francisco Molina Rubio
   */
  scroll() {
    this.viewportScroller.scrollToAnchor('bloque2'); // Desplaza la vista hasta el elemento 'bloque2'
  }

  constructor(private viewportScroller: ViewportScroller) { }

}