import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-terminos',
  templateUrl: './modal-terminos.component.html',
  styleUrl: './modal-terminos.component.css'
})
export class ModalTerminosComponent {

  constructor(
    public activeModal: NgbActiveModal
  ){}

}

