import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-terminos', // Selector del componente
  templateUrl: './modal-terminos.component.html', // Plantilla HTML del componente
  styleUrl: './modal-terminos.component.css' // Estilos CSS del componente
})
export class ModalTerminosComponent {
  // Constructor del componente
  constructor(
    public activeModal: NgbActiveModal // Inyección de NgbActiveModal para manejar el modal activo
  ){}
}
