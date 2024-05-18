import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

// Clase que define el componente modal para mostrar detalles de la compra
export class ModalComponent {

  @Input() amount; // Input que recibe la cantidad total de la compra desde el componente padre
  @Input() items; // Input que recibe los items de la compra desde el componente padre

  constructor(
    public activeModal: NgbActiveModal // Inyección de dependencia del servicio NgbActiveModal para manejar el modal activo
  ){}

}