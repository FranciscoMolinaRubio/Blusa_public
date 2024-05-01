import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ComunicacionesService } from '../servicios/comunicaciones.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent implements OnInit {

  recibido: boolean;
  textoLogeado= "Código de descuento para usuarios registrados: 'BlusaDescount'";
  
  private unsubscribe = new Subject<void>();
  constructor(public mensajerecibido: ComunicacionesService) {
}

  ngOnInit(): void {
    this.mensajerecibido.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.recibido = data;
    });
  }
}
