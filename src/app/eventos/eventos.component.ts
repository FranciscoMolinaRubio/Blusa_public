import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ComunicacionesService } from '../servicios/comunicaciones.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})

// Clase que define el componente para mostrar eventos
export class EventosComponent implements OnInit {

  recibido: boolean; // Variable que indica si se ha recibido un mensaje
  textoLogeado = "Clave de descuento para usuarios registrados: 'BlusaDescount'"; // Texto que muestra la clave de descuento para usuarios registrados

  private unsubscribe = new Subject<void>(); // Sujeto para manejar la cancelación de suscripciones

  constructor(public mensajerecibido: ComunicacionesService) {
  }

  /**
   * Función que se llama al cargar la página y suscribe al servicio de comunicaciones para recibir datos
   * @autor Francisco Molina Rubio
   */
  ngOnInit(): void {
    this.mensajerecibido.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.recibido = data; // Actualiza la variable cuando se recibe un mensaje
    });
  }
}
